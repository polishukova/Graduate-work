import { ReactNode } from "react";

type Props = {example: number}

export const Lesson = (props: Props ) => {
    return <div>
        <p> I LOVE REACT + {props.example}</p>
    </div>
};

//11 строка эквивалентна 3 и 5, если их деструктуризировать
export const Ex = ({children, name, age}:{children?: ReactNode, name: string, age: number}) => (
    <div>{children} HAHA my name {name} amd my age {age}</div>
);

