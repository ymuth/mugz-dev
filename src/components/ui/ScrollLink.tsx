"use client";

type Props = {
    target: string;
    children: React.ReactNode;
    className?: string;
};

export default function ScrollLink({
    target,
    children,
    className,
}: Props) {
    function handleClick() {
        document.getElementById(target)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            className={className}
        >
            {children}
        </button>
    );
}