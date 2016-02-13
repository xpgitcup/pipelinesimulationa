package cn.edu.cup.ogts.equipment

/*
 * 压缩机
 * 2016.02.13, 
 * 李晓平
 * -----------------------------------------------------------------------------
 * 压缩机
 * */
class Compressor {

    String name
    CompressorType compressorType
    
    static constraints = {
    }
    
    String toString() {
        return "${name}"
    }
}
