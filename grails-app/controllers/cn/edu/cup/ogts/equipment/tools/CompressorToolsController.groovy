package cn.edu.cup.ogts.equipment.tools

import cn.edu.cup.system.SystemProcedure
import cn.edu.cup.ogts.equipment.CompressorCurveTest
import cn.edu.cup.ogts.equipment.Compressor
import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class CompressorToolsController {
    
    /*
     * 检索某压缩及对应的测试！
     * */
    def queryCompressorCurveTest() {
        def compressor = Compressor.get(params.id)
        def tests
        if (request.xhr) {
            render(template: "compressorCurveTest", model:[tests: tests, compressor:compressor])
        } else {
            render(template: "compressorCurveTest", model:[tests: tests, compressor: compressor])
        }
    }
    
    /*
     * 检索所有的压缩机
     * */
    def queryCompressor() {
        def compressors = Compressor.list()
        if (request.xhr) {
            render(template: "compressors", model:[compressors: compressors])
        } else {
            render(template: "compressors", model:[compressors: compressors])
        }
    }
    
    def newCompressorCurveTest() { 
        println "${params}"
        def procedure = SystemProcedure.findByControllerNameAndActionName(params.controller, params.action)
        println "${procedure.appendActions}"
        model:[menus: procedure.appendActions]
    }
    
    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond CompressorCurveTest.list(params), model:[compressorCurveTestInstanceCount: CompressorCurveTest.count()]
    }

}
