import Piece from "./PieceInterface";

interface PieceTable {
    pieces: Piece[];
    original : string;
    add_string : string;
    add_piece(istart : number, ilength: number, isource : string, update : string) : void;
    undo() : void;
    output() : string;
    input(filetext :string) : void;
}

export default PieceTable;