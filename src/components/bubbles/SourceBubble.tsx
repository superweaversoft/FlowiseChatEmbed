type Props = {
  pageContent: string;
  metadata: object;
  onSourceClick?: () => void;
};
export const SourceBubble = (props: Props) => (
  <>
    <div
      dir="rtl"
      data-modal-target="defaultModal"
      data-modal-toggle="defaultModal"
      class="flex justify-start mb-2 items-start animate-fade-in host-container hover:brightness-90 active:brightness-75"
      onClick={() => props.onSourceClick?.()}
    >
      <span
        class="px-2 py-1 ml-1 whitespace-pre-wrap max-w-full chatbot-host-bubble"
        data-testid="host-bubble"
        style={{
          width: 'max-content',
          direction: 'rtl',
          'max-width': '80px',
          'font-size': '13px',
          'border-radius': '15px',
          cursor: 'pointer',
          'text-overflow': 'ellipsis',
          overflow: 'hidden',
          'white-space': 'nowrap',
        }}
      >
        {props.pageContent}
      </span>
    </div>
  </>
);
