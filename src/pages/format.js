import React from 'react';
import { Link } from 'react-router-dom';
// import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { Panel, PanelHeader, PanelBody, PanelFooter } from '../components/panel/panel';
// import { Line } from 'react-chartjs-2';
// import GoogleMapReact from 'google-map-react';
// import classnames from 'classnames';
// import Calendar from 'react-calendar';
import Sparkline from '@rowno/sparkline';
// import PerfectScrollbar from 'react-perfect-scrollbar';

class DashboardV1 extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      activeTab: '1',
    };

    this.lineChartData = {
      labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [
        {
          label: 'Page Views',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(0, 172, 172, 0.25)',
          borderColor: '#00acac',
          borderWidth: 2,
          pointBorderColor: '#00acac',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 2,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#00acac',
          pointHoverBorderWidth: 3,
          pointRadius: 3,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40, 59, 76, 94, 77, 82],
        },
        {
          label: 'Visitors',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(52, 143, 226, 0.25)',
          borderColor: '#348fe2',
          borderWidth: 2,
          pointBorderColor: '#348fe2',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 2,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#348fe2',
          pointHoverBorderWidth: 3,
          pointRadius: 3,
          pointHitRadius: 10,
          data: [25, 29, 40, 45, 16, 15, 20, 39, 26, 44, 57, 32],
        },
      ],
    };

    this.lineChartOptions = {
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontColor: 'black',
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              fontColor: 'black',
            },
          },
        ],
      },
      legend: {
        labels: {
          fontColor: 'black',
        },
      },
    };

    this.map = {
      center: {
        lat: 59.95,
        lng: 30.33,
      },
      zoom: 9,
    };

    this.date = new Date();

    this.sparklineData = [
      {
        values: [789, 880, 676, 200, 890, 677, 900],
        colors: {
          area: 'transparent',
          line: '#ff5b57',
        },
      },
    ];

    this.sparklineData2 = [
      {
        values: [789, 880, 676, 200, 890, 677, 900],
        colors: {
          area: 'transparent',
          line: '#f59c1a',
        },
      },
    ];

    this.sparklineData3 = [
      {
        values: [789, 880, 676, 200, 890, 677, 900],
        colors: {
          area: 'transparent',
          line: '#00acac',
        },
      },
    ];

    this.sparklineData4 = [
      {
        values: [789, 880, 676, 200, 890, 677, 900],
        colors: {
          area: 'transparent',
          line: '#348fe2',
        },
      },
    ];

    this.sparklineData5 = [
      {
        values: [789, 880, 676, 200, 890, 677, 900],
        colors: {
          area: 'transparent',
          line: '#ccc',
        },
      },
    ];

    this.sparklineData6 = [
      {
        values: [789, 880, 676, 200, 890, 677, 900],
        colors: {
          area: 'transparent',
          line: '#2d353c',
        },
      },
    ];
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="/dashboard/v1"> Home </Link>
          </li>
          <li className="breadcrumb-item active"> Dashboard </li>
        </ol>
        <h1 className="page-header">
          Dashboard <small> header small text goes here... </small>
        </h1>
        <div className="row"></div>
        <div>
            <input className='form-control' type="text" name="" id=""/>
        </div>
        <div id="widgets">
          <div className="col-xl-3 col-md-6">
            <div className="widget widget-stats bg-red">
              <div className="stats-icon">
                <i className="fa fa-desktop"> </i>
              </div>
              <div className="stats-info">
                <h4> TOTAL VISITORS </h4> <p> 3, 291, 922 </p>
              </div>
              <div className="stats-link">
                <Link to="/dashboard/v1">
                  View Detail <i className="fa fa-arrow-alt-circle-right"> </i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="widget widget-stats bg-orange">
              <div className="stats-icon">
                <i className="fa fa-link"> </i>
              </div>
              <div className="stats-info">
                <h4> BOUNCE RATE </h4> <p> 20.44 % </p>
              </div>
              <div className="stats-link">
                <Link to="/dashboard/v1">
                  View Detail <i className="fa fa-arrow-alt-circle-right"> </i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="widget widget-stats bg-grey-darker">
              <div className="stats-icon">
                <i className="fa fa-users"> </i>
              </div>
              <div className="stats-info">
                <h4> UNIQUE VISITORS </h4> <p> 1, 291, 922 </p>
              </div>
              <div className="stats-link">
                <Link to="/dashboard/v1">
                  View Detail <i className="fa fa-arrow-alt-circle-right"> </i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="widget widget-stats bg-black-lighter">
              <div className="stats-icon">
                <i className="fa fa-clock"> </i>
              </div>
              <div className="stats-info">
                <h4> AVG TIME ON SITE </h4> <p> 00: 12: 23 </p>
              </div>
              <div className="stats-link">
                <Link to="/dashboard/v1">
                  View Detail <i className="fa fa-arrow-alt-circle-right"> </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <Panel>
            <PanelHeader>Website Analytics(Last 7 Days)</PanelHeader>
            <PanelBody>
              <line data={this.lineChartData} height={300} options={this.lineChartOptions} />
            </PanelBody>
          </Panel>

          <Panel>
            <PanelHeader>Quick Post </PanelHeader>
            <div className="panel-toolbar">
              <div className="btn-group m-r-5">
                <button className="btn btn-white">
                  <i className="fa fa-bold"> </i>
                </button>
                <button className="btn btn-white active">
                  <i className="fa fa-italic"> </i>
                </button>
                <button className="btn btn-white">
                  <i className="fa fa-underline"> </i>
                </button>
              </div>
              <div className="btn-group">
                <button className="btn btn-white">
                  <i className="fa fa-align-left"> </i>
                </button>
                <button className="btn btn-white active">
                  <i className="fa fa-align-center"> </i>
                </button>
                <button className="btn btn-white">
                  <i className="fa fa-align-right"> </i>
                </button>
                <button className="btn btn-white">
                  <i className="fa fa-align-justify"> </i>
                </button>
              </div>
            </div>
            <textarea
              className="form-control no-rounded-corner bg-light"
              rows="14"
              defaultValue="Enter some comment."></textarea>
            <PanelFooter className={'text-right'}>
              <button className="btn btn-white btn-sm"> Cancel </button>
              <button className="btn btn-primary btn-sm m-l-5"> Action </button>
            </PanelFooter>
          </Panel>

          <Panel>
            <PanelHeader> Analytics Details </PanelHeader>
            <PanelBody className="p-0">
              <div className="table-responsive">
                <table className="table table-valign-middle mb-0">
                  <thead>
                    <tr>
                      <th className="p-l-15"> Source </th> <th> Total </th> <th className="p-r-15"> Trend </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-l-15">
                        <label className="label label-danger"> Unique Visitor </label>
                      </td>
                      <td>
                        13, 203
                        <span className="text-success">
                          <i className="fa fa-arrow-up"> </i>
                        </span>
                      </td>
                      <td className="p-r-15">
                        <Sparkline width={100} height={20} lines={this.sparklineData} />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-l-15">
                        <label className="label label-warning"> Bounce Rate </label>
                      </td>
                      <td> 28.2 % </td>
                      <td className="p-r-15">
                        <Sparkline width={100} height={20} lines={this.sparklineData2} />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-l-15">
                        <label className="label label-success"> Total Page Views </label>
                      </td>
                      <td> 1, 230, 030 </td>
                      <td className="p-r-15">
                        <Sparkline width={100} height={20} lines={this.sparklineData3} />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-l-15">
                        <label className="label label-primary"> Avg Time On Site </label>
                      </td>
                      <td> 00: 03: 45 </td>
                      <td className="p-r-15">
                        <Sparkline width={100} height={20} lines={this.sparklineData4} />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-l-15">
                        <label className="label label-default"> % New Visits </label>
                      </td>
                      <td> 40.5 % </td>
                      <td className="p-r-15">
                        <Sparkline width={100} height={20} lines={this.sparklineData5} />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-l-15">
                        <label className="label label-inverse"> Return Visitors </label>
                      </td>
                      <td> 73.4 % </td>
                      <td className="p-r-15">
                        <Sparkline width={100} height={20} lines={this.sparklineData6} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </PanelBody>
          </Panel>
          <Panel>
            <PanelHeader> Todo List </PanelHeader>
            <PanelBody className="p-0">
              <ul className="todolist">
                <li className="active">
                  <Link to="/dashboard/v1" className="todolist-container active">
                    <div className="todolist-input">
                      <i className="fa fa-square"> </i>
                    </div>
                    <div className="todolist-title"> Donec vehicula pretium nisl, id lacinia nisl tincidunt id. </div>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/v1" className="todolist-container">
                    <div className="todolist-input">
                      <i className="fa fa-square"> </i>
                    </div>
                    <div className="todolist-title"> Duis a ullamcorper massa. </div>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/v1" className="todolist-container">
                    <div className="todolist-input">
                      <i className="fa fa-square"> </i>
                    </div>
                    <div className="todolist-title"> Phasellus bibendum, odio nec vestibulum ullamcorper. </div>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/v1" className="todolist-container">
                    <div className="todolist-input">
                      <i className="fa fa-square"> </i>
                    </div>
                    <div className="todolist-title"> Duis pharetra mi sit amet dictum congue. </div>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/v1" className="todolist-container">
                    <div className="todolist-input">
                      <i className="fa fa-square"> </i>
                    </div>
                    <div className="todolist-title"> Duis pharetra mi sit amet dictum congue. </div>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/v1" className="todolist-container">
                    <div className="todolist-input">
                      <i className="fa fa-square"> </i>
                    </div>
                    <div className="todolist-title"> Phasellus bibendum, odio nec vestibulum ullamcorper. </div>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/v1" className="todolist-container">
                    <div className="todolist-input">
                      <i className="fa fa-square"> </i>
                    </div>
                    <div className="todolist-title"> Donec vehicula pretium nisl, id lacinia nisl tincidunt id. </div>
                  </Link>
                </li>
              </ul>
            </PanelBody>
          </Panel>
        </div>
      </div>
    );
  }
}

export default DashboardV1;
