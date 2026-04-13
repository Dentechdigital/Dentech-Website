import type { ChatCompletionRequest, ChatCompletionResponse, ChatErrorResponse } from '../../types/chatbot';

const CHAT_ENDPOINT = '/.netlify/functions/chat-completions';

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function sendChatCompletion(request: ChatCompletionRequest): Promise<ChatCompletionResponse> {
  const attempts = [0, 450, 900];
  let lastError: Error | null = null;

  for (const backoff of attempts) {
    if (backoff > 0) await delay(backoff);
    try {
      const response = await fetch(CHAT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as ChatErrorResponse | null;
        const message = payload?.message || 'Chat service is temporarily unavailable.';
        const isRetryable = payload?.retryable ?? (response.status >= 500 || response.status === 429);
        if (!isRetryable) throw new Error(message);
        lastError = new Error(message);
        continue;
      }

      return (await response.json()) as ChatCompletionResponse;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error('Unexpected chat error.');
    }
  }

  throw lastError ?? new Error('Unable to connect to chat service right now.');
}
