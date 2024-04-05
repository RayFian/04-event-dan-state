export default function Tombol_1() {
    function handleClick() {
        alert("Tombol telah ditekan!!");
    }

    function handleMouseOver() {
        alert("Eits, mau mencet tombol ya??");
    }

    function handleMouseLeave() {
        alert("Loh, kok udah pergi!!!");
    }

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >
            Ini tombol
        </button>
    );
}
