import React from 'react';

interface ProgressBarProps {
  progress: number; // 0 a 100
  label?: string;
  showPercentage?: boolean;
  className?: string;
  Valor?: number; // infinito
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  label,
  showPercentage = true,
  className = '',
  Valor,

}) => {
  // Garante que o progresso esteja entre 0 e 100
  const safeProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
          <span>{label}</span>
          {showPercentage && (
            <span>{Math.round(safeProgress)}%</span>
          )}
        </div>
      )}
      
      <div className="w-full bg-zinc-900 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-amber-300 h-2.5 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${safeProgress}%` }}
        />
      </div>

    </div>
  );
};

export default ProgressBar;