import { CheckCircle } from "phosphor-react";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson() {
  return (
    <a href="#">
      <span className="text-gray-300">Terça • 22 de junho • 19h00</span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
            <CheckCircle size={20} />
            Conteúdo Liberado
          </span>
          <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300">
            Ao vivo
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">
          Abertura do Evento Ignite Lab
        </strong>
      </div>
    </a>
  );
}
