interface ContentProps {
    title: string;
    description: string;
    value: number;
}

export function Header(props: ContentProps) {
    return (
        <section>
            <div style={{
                border:"1px solid #ccc",

            }}
            >
                <h1>{props.title}</h1>
                <h2>{props.description}</h2>
                <h3>{props.value}</h3>
            </div>

            
        </section>
    );
}