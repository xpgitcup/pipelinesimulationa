package cn.edu.cup.ogts.equipment

/*
 * 压缩机特性曲线
 * 2016.02.13, 
 * 李晓平
 * -----------------------------------------------------------------------------
 * 表征压缩机特性的曲线
 * */
class CompressorCurve {

    static belongsTo = [compressor: Compressor]
    
    static constraints = {
    }
}
