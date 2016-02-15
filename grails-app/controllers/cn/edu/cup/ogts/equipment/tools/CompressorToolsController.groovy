package cn.edu.cup.ogts.equipment.tools

class CompressorToolsController {

    def index() { 
        def procedure = SystemProcedure.findByControllerNameAndActionName(params.controller, params.action)
        model:[procedure, procedure]
    }
}
