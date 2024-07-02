interface Todo {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoDiv({
  id,
  title,
  content,
  isDone,
  onToggle,
  onDelete,
}: Todo) {
  return (
    <div className="flex flex-col border-green-700 border-4 rounded-xl px-4 py-8 gap-2">
      <h3 className="font-bold text-2xl">{title}</h3>
      <p>{content}</p>
      <div className="flex w-full justify-between *:px-10 *:py-2 *:rounded-xl pt-2">
        <button className="bg-red-400 text-white" onClick={() => onDelete(id)}>
          Delete
        </button>
        <button
          className="bg-green-400 text-white"
          onClick={() => onToggle(id)}
        >
          {isDone ? "Cancel" : "Done"}
        </button>
      </div>
    </div>
  );
}
