
type ChatMessageProps = {
  user: string;
  text: string;
};

export default function ChatMessage({ user, text }: ChatMessageProps) {
  const formatText = (text: string): string => {
    // Convert bold text
    const formattedBoldText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Convert bullet points to list items
    const formattedBulletPoints = formattedBoldText.replace(/^\* (.*)$/gm, '<li>$1</li>');

    // Wrap bullet points in an <ol> tag and add a bullet point before the <ol>
    const formattedList = formattedBulletPoints.replace(/(<li>.*<\/li>)/g, '<span>&#8226;</span> <ol style="padding-left: 15px; margin-top:-22px;">$1</ol>');

    // Remove empty <ol> tags (if no bullet points)
    const cleanedUpText = formattedList.replace(/<ol>\s*<\/ol>/g, '');

    // Convert newlines to <br /> for proper display
    const finalText = cleanedUpText.replace(/\n/g, '<br />');

    return finalText;
  };
  return (
    <div
    className={`flex ${
      user === "You" ? "justify-end" : "justify-start"
      } mx-8 my-6`}
    >
      <div
        className={`rounded-lg p-3 max-w-[50%] ${
          user === "You" ? "bg-blue-600 text-white" : "bg-[#D9D9D9] text-black"
        } break-words`}
      >
        <span className="block font-semibold">{user}</span>
        <div dangerouslySetInnerHTML={{ __html: formatText(text) }} />
      </div>
    </div>
  );
}
