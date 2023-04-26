// https://github.com/sparkeditor/piece-table/blob/master/index.js

import Piece from "./PieceInterface"
import PieceTable from "./pieceTableInterface"

let pieceTableInstance : PieceTable = {
    original : "",
    add_string : "",
    pieces : [],

    add_piece(istart : number, ilength: number, isource : string, update : string) {
        let piece : Piece = {
            start : istart,
            length : ilength,
            ssource : isource
        }
        this.pieces.push(piece)
        this.add_string += update
    },

    undo() {
        this.pieces.pop()
    },

    output(){
        let final = ""
        console.log("wait")
        if (this.pieces.length != 0) {
            this.pieces.forEach((piece) => 
            {
                if (piece.ssource == "original") {
                    final += this.original.slice(piece.start, piece.start+piece.length)
                }
                else {
                    final += this.add_string.slice(piece.start, piece.start+piece.length)
                }
            })
            return final
        }
        else{
            return this.original
        }
        
    },

    input(filetext : string){
        this.original = filetext
    }

}


export default pieceTableInstance;
