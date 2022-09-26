interface TitleProps  {
    title: string;
}

export const Title = ({ title } : TitleProps) => {
    return (
        <div className={`font-bold text-xl border-b-4 w-fit pb-1 border-white/50 dark:border-white/20`}>
            {title}
        </div>
    )
}