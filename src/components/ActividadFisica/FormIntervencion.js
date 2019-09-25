import React, { Component } from 'react'


///componentes custom

import SelectAsync from '../ActividadFisica/SelectAsync'


const INITIAL_STATE_VALUES = {
    validationControles: false,
    selSigMov: null,
    selPozos: null,
    selResponsable: null,
    selEq: null,
    selClase: null,
    inpQoP: null,
    inpQoR: null,
    datetimepicker1: null,
    datetimepicker2: null
}

class FormAF extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Pozos: [],
            Actividad: [],
            Equipos: [],
            Responsables: [],
            Clase: [],
            validationControles: false,
            banderaPer: false,
            banderaTer: false,
            banderaRMA: false,
            banderaRME: false,
            banderaBase: false,
            banderaTI: false,
            selActividad: null,
            selSigMov: null,
            selPozos: null,
            selResponsable: null,
            selEq: null,
            selClase: null,
            inpQoP: null,
            inpQoR: null,
            datetimepicker1: null,
            datetimepicker2: null
        }
    }

    getActividadFromInterv = (datos) => {
        let aux
        let ClasificacionInt = datos.reduce((vAnt, vAct) => {
            if (vAnt.length == 0) {
                vAnt.push(vAct)
            } else {
                if (aux.Clasificacion != vAct.Clasificacion) {
                    vAnt.push(vAct)
                }
            }
            aux = vAct
            return vAnt
        }, [])

        return ClasificacionInt
    }


    onFilterClases = (data, stringKey, valor) => {
        let clases = data.filter(ToolsJson.filterByKeyValue.bind(this, stringKey, valor))
        return clases
    }

    onFormSubmit = (evento) => {

        evento.preventDefault()

        const { selActividad, selPozos, selSigMov, selResponsable, selEq, selClase, inpQoP, inpQoR, datetimepicker1, datetimepicker2 } = this.state
        let bandera = false

        switch (selActividad) {
            case 1:
                bandera = !!selPozos && !!selResponsable && !!selEq && !!selClase && !!datetimepicker1 && !!datetimepicker2
                break;
            case 2:
                bandera = !!selPozos && !!selResponsable && !!selClase && !!datetimepicker1 && !!datetimepicker2 && !!inpQoP && !!inpQoR
                break;
            case 3:
                bandera = !!selPozos && !!selResponsable && !!selEq && !!selClase && !!datetimepicker1 && !!datetimepicker2 && !!inpQoP && !!inpQoR
                break;
            case 4:
                bandera = !!selPozos && !!selResponsable && !!selEq && !!selClase && !!datetimepicker1 && !!datetimepicker2 && !!selSigMov && (selSigMov !== selPozos)
                break;
            case 5 :
            case 11:
                bandera = !!selPozos && !!selResponsable && !!selClase && !!datetimepicker1 && !!datetimepicker2 && !!inpQoP && !!inpQoR
                break;
            default:
                break;
        }


        if (bandera === false) {
            if (selPozos===selSigMov) {
                alert('El siguiente movimiento debe ser diferente al pozo')
            }
            this.setState({
                validationControles: true
            })
        } else {
            let af_data = new POCO_AF(selPozos, selClase, selResponsable, datetimepicker1, datetimepicker2, datetimepicker2, datetimepicker2, datetimepicker2, 7, selSigMov, selEq, inpQoP, inpQoR, 1)
            let options = {
                method: 'POST', // or 'PUT','DELETE','GET'
                body: JSON.stringify(af_data),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }
            this.props.fetchisLoading()
            this.props.fetchData('/CrearAF/addAF', options, itemsIsLoading,sendFetchDataSucces, itemsGetDataHasError)
        }
    }



    onChangeSelectActividad = (optionSelected, nameControl) => {
        
        
        switch (optionSelected.value) {
            case 1:
                this.setState({
                    banderaPer: true,
                    banderaTer: false,
                    banderaRMA: false,
                    banderaRME: false,
                    banderaBase: false,
                    banderaTI:false,
                    Clase: this.onFilterClases(this.props.data.Intervenciones, 'IdCatClasificacion', '1'),
                    selActividad: optionSelected.value,
                    ...INITIAL_STATE_VALUES
                })
                this.clearDataPickers();
                break;

            case 2:
                this.setState({
                    banderaPer: false,
                    banderaTer: true,
                    banderaRMA: false,
                    banderaRME: false,
                    banderaBase: false,
                    banderaTI:false,
                    Clase: this.onFilterClases(this.props.data.Intervenciones, 'IdCatClasificacion', '2'),
                    selActividad: optionSelected.value,
                    ...INITIAL_STATE_VALUES
                })
                this.clearDataPickers();
                break;
            case 3:
                this.setState({
                    banderaPer: false,
                    banderaTer: false,
                    banderaRMA: true,
                    banderaRME: false,
                    banderaBase: false,
                    banderaTI:false,
                    Clase: this.onFilterClases(this.props.data.Intervenciones, 'IdCatClasificacion', '3'),
                    selActividad: optionSelected.value,
                    ...INITIAL_STATE_VALUES
                })
                this.clearDataPickers();
                break;
            case 4:
                this.setState({
                    banderaPer: false,
                    banderaTer: false,
                    banderaRMA: false,
                    banderaRME: true,
                    banderaBase: false,
                    banderaTI:false,
                    Clase: this.onFilterClases(this.props.data.Intervenciones, 'IdCatClasificacion', '4'),
                    selActividad: optionSelected.value,
                    ...INITIAL_STATE_VALUES
                })
                this.clearDataPickers();
                break;
            case 5:
                this.setState({
                    banderaPer: false,
                    banderaTer: false,
                    banderaRMA: false,
                    banderaRME: false,
                    banderaBase: true,
                    banderaTI:false,
                    Clase: this.onFilterClases(this.props.data.Intervenciones, 'IdCatClasificacion', '5'),
                    selActividad: optionSelected.value,
                    ...INITIAL_STATE_VALUES
                })
                this.clearDataPickers();
                break;
                case 11:
                    this.setState({
                        banderaPer: false,
                        banderaTer: false,
                        banderaRMA: false,
                        banderaRME: false,
                        banderaBase: false,
                        banderaTI:true,
                        Clase: this.onFilterClases(this.props.data.Intervenciones, 'IdCatClasificacion', '11'),
                        selActividad: optionSelected.value,
                        ...INITIAL_STATE_VALUES
                    })
                    this.clearDataPickers();
                    break;
            default:
                break;
        }
    }

    onChangeSelectCatalogo = (optionSelected, nameControl) => {
        this.setState({
            [nameControl]: optionSelected.value
        })
    }

    onchangeInputs = (evento) => {
        this.setState({
            [evento.target.name]: evento.target.value
        })
    }

    // clearDataPickers = () => {
    //     $('#datetimepicker1').data("DateTimePicker").clear()
    //     $('#datetimepicker2').data("DateTimePicker").clear()
    // }

    // configurarPickers = () => {
    //     $('#datetimepicker1').datetimepicker({
    //         format: 'DD/MM/YYYY HH:mm'

    //     }).on('dp.change', (e) => {
    //         this.onchangeInputs(e)
    //     })

    //     $('#datetimepicker2').datetimepicker({
    //         format: 'DD/MM/YYYY HH:mm'
    //     }).on('dp.change', (e) => {
    //         this.onchangeInputs(e)
    //     })
    // }

    // showModal = () => {
    //     $("#modalLoader2").modal();
    // }
    // hiddenModal = () => {
    //     $("#modalLoader2").modal('hide');
    // }


    // componentDidMount() {
    //     this.configurarPickers()        
    // }

    
    render() {
        const { banderaBase, banderaPer, banderaRME, banderaTer, banderaRMA, banderaTI } = this.state
        const { validationControles, datetimepicker1, datetimepicker2, selActividad, selClase, selEq, selPozos, selSigMov, selResponsable, inpQoP, inpQoR } = this.state

        const actividadSel = banderaBase === true || banderaPer === true || banderaRME === true || banderaTer === true || banderaRMA === true || banderaTI === true
        const viewEquipo = banderaPer === true || banderaRME === true || banderaRMA === true
        const viewClase = banderaBase === true || banderaPer === true || banderaRME === true || banderaTer === true || banderaRMA === true || banderaTI === true
        const viewGasto = banderaBase === true || banderaRME === true || banderaTer === true || banderaRMA || banderaTI === true
        const viewSigMov = banderaRME === true



        return (
            <div>
                <div className="panel">
                    <div className="panel-heading">
                        <h3 className="panel-title">Crear Actividad Fisica</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onFormSubmit}>
                            <div className='form-group' >
                                <label htmlFor="selActividad">Actividad</label>                              
                                 <SelectRNormal className={validationControles && selActividad === null ? 'error' : ''} data={this.state.Actividad} id='selActividad' name='selActividad' label='Clasificacion' valor='IdCatClasificacion' onChangeSelectValue={this.onChangeSelectActividad} />
                            </div>

                            {
                                actividadSel === true
                                    ?
                                    <div className='form-group'>
                                        <label htmlFor="selPozos">Pozo</label>                                        
                                        <SelectR className={validationControles && selPozos === null ? 'error' : ''} data={this.state.Pozos} name='selPozos' id='NombreCompleto' label='NombreCompleto' valor='IdCatPozos' onChangeSelectValue={this.onChangeSelectCatalogo} />
                                    </div>
                                    : <span></span>
                            }
                            {
                                viewEquipo === true
                                    ?
                                    <div className='form-group'>
                                        <label htmlFor="selEq">Equipo</label>                                        
                                        <SelectRNormal className={validationControles && selEq === null ? 'error' : ''} data={this.state.Equipos} id='selEq' name='selEq' label='Equipo' valor='IdCatEquipos' onChangeSelectValue={this.onChangeSelectCatalogo} />
                                    </div>
                                    :
                                    <span></span>
                            }
                            {
                                actividadSel === true
                                    ?
                                    <div className='form-group'>
                                        <label htmlFor="selResponsable">Responsable</label>                                        
                                        <SelectRNormal className={validationControles && selResponsable === null ? 'error' : ''} data={this.state.Responsables} id='selResponsable' name='selResponsable' label='Nombre' valor='IdPersona' onChangeSelectValue={this.onChangeSelectCatalogo} />                                        
                                    </div>
                                    :
                                    <span></span>

                            }

                            {
                                viewClase === true
                                    ?
                                    <div className='form-group'>
                                        <label htmlFor="selClase">Clase</label>                                        
                                        <SelectRNormal className={validationControles && selClase === null ? 'error' : ''} data={this.state.Clase} id='selClase' name='selClase' label='Intervencion' valor='IdCatIntervenciones' onChangeSelectValue={this.onChangeSelectCatalogo} />
                                    </div>
                                    :
                                    <span></span>
                            }


                            {
                                viewGasto === true
                                    ?
                                    <div id="contQos" className='form-group'>
                                        <label htmlFor="inpQoP">Qo Prog</label>
                                        <input className={validationControles && inpQoP === null ? 'form-control error' : 'form-control'} type="number" id="inpQoP" name='inpQoP' onChange={this.onchangeInputs} />
                                        <label htmlFor="inpQoR">Qo Real</label>
                                        <input className={validationControles && inpQoR === null ? 'form-control error' : 'form-control'} type="number" id="inpQoR" name='inpQoR' onChange={this.onchangeInputs} />
                                    </div>
                                    :
                                    <span></span>
                            }


                            <div id="contFechas" className={actividadSel ? 'form-group' : 'hiddenControl'}>
                                <div className='col-sm-6'>
                                    <label htmlFor="datetimepicker1">Fecha inicio Mov Fisica Programa</label>
                                    <input type="datetime" name="" id=""/>
                                </div>
                                <div className='col-sm-6'>
                                    <label htmlFor="datetimepicker2">Fecha inicio Mov Fisica Real</label>
                                    <input type="datetime" name="" id=""/>
                                    {/* <input type='text' className={validationControles && datetimepicker2 === null ? 'form-control error' : 'form-control'} id='datetimepicker2' name='datetimepicker2' /> */}
                                </div>
                            </div>
                            {
                                viewSigMov === true
                                    ?
                                    <div className='form-group'>
                                        <label htmlFor="selSigMov">Siguiente Movimiento</label>
                                        {/* <SelectR className={validationControles && selSigMov === null ? 'error' : ''} data={this.state.Pozos} name='selSigMov' id='selSigMov' label='NombreCompleto' valor='IdCatPozos' onChangeSelectValue={this.onChangeSelectCatalogo} /> */}
                                    </div>
                                    : <span></span>
                            }
                            {
                                actividadSel === true
                                    ?
                                    <div className='form-group'>
                                        <button type="submit" className='btn btn-primary'>Enviar</button>
                                    </div>
                                    : <span></span>
                            }
                        </form>
                    </div>
                </div>                
            </div>
        )
    }

}

export default FormAF

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = (dispatch) => ({
//     fetchData: (url, options, callLoader, callSucces, callError) => dispatch(FetchData(url, options, callLoader, callSucces, callError)),
//     fetchisLoading: () => {dispatch(itemsIsLoading(true))}  
// })

// export default connect(mapDispatchToProps, mapDispatchToProps)(FormAF)

