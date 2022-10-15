import { formatRelative } from "date-fns";
import parse from "html-react-parser";

export default function Message({ message, currentSender }) {
  const sent = formatRelative(new Date(message.created), new Date());
  const isSender = message.sender == currentSender;

  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"}`}>
      <div className="inline-block">
        <div
          className={`p-4 ${
            isSender
              ? "rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl bg-cyan-500 text-white"
              : "rounded-tl-2xl rounded-tr-2xl rounded-br-2xl bg-white text-neutral-800"
          }`}
        >
          <span className=" first-letter:uppercase">{parse(message.text)}</span>
        </div>
        <div
          className={`
            mt-3 text-xs uppercase text-neutral-400 ${
              isSender ? "text-right" : "text-left"
            }
          `}
        >
          {sent}
        </div>
      </div>
    </div>
  );
}
