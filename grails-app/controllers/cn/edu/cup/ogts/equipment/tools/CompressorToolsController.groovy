package cn.edu.cup.ogts.equipment.tools

import cn.edu.cup.system.SystemProcedure
import cn.edu.cup.ogts.equipment.CompressorCurveTest
import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class CompressorToolsController {
    
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
