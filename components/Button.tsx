"use client";

interface Props {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => {};
  className?: string;
}

export default function Button({
  children,
  disabled,
  onClick,
  className,
}: Props) {
  const classes = `w-full h-12 flex items-center px-4 rounded-xl text-xl bg-brandCyan disabled:bg-gray-200 text-white disabled:text-gray-400 ${className}`;

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
