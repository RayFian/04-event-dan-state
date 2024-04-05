import { sculptureList } from "@/data/article";
import { useState } from "react";

export default function Gallery() {
    const [index, setIndex] = useState(0);

    function handleNextClick() {
        setIndex(index === sculptureList.length - 1 ? 0 : index + 1);
    }

    function handlePrevClick() {
        setIndex(index === 0 ? sculptureList.length - 1 : index - 1);
    }

    let sculpture = sculptureList[index];

    return (
        <>
            <button
                onClick={handlePrevClick}
                className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded"> Artikel Sebelumnya</button>
            <button
                onClick={handleNextClick}
                className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded"> Artikel Selanjutnya</button>
            <h2><i>{sculpture.name}</i> oleh {sculpture.artist}</h2>
            <h3>({index + 1} dari {sculptureList.length})</h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>
                {sculpture.description}
            </p>
        </>
    );
}
