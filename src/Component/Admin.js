import React, { Component } from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import './admin.css'
function Admin() {

    const state = {
        labels: [' Open', 'Bounce', 'Unsubscribe'],
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: [
                    '#F3BB45',
                    '#EB5E28',
                    '#68B3C8',
                ],
                // hoverBackgroundColor: [
                //     '#175000',
                //     '#4B5000',
                //     '#501800',
                // ],
                data: [600, 800, 1000]
            }
        ]
    }

    const dataBar = {
        labels: ['9:00AM', '12:00AM', '3:00PM', '9:00PM', '12:00PM'],
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: [
                    '#F3BB45',
                    '#EB5E28',
                    '#68B3C8',
                    '#20c997',
                    '#dc3545',
                ],

                data: [600, 1000, 100, 500, 700]
            }
        ]
    }

    return (
        <div>
            <div id="wrapper" style={{ display: 'flex' }}>

                {/* ========== Left Sidebar Start ========== */}
                <div className="left-side-menu">
                    <div className="slimscroll-menu" style={{ width: '260px' }}>
                        {/*- Sidemenu */}
                        <div id="sidebar-menu" >
                            <ul className="metismenu" id="side-menu">

                                <li>
                                    <h2>Menu</h2>


                                </li>
                                <li>
                                    <a className='menu-left' href=''>
                                        <i class="fa fa-th-list" style={{ marginRight: '10px' }}></i>
                                        <span>Dashboard</span>
                                    </a>


                                </li>
                                <li>
                                    <a className='menu-left' href='./userprofile'>
                                        <i class="fa fa-users" style={{ marginRight: '10px' }}></i>
                                        <span>user profile</span>
                                    </a>


                                </li>
                                <li>
                                    <a className='menu-left' href=''>
                                        <i class="fa fa-map" style={{ marginRight: '10px' }}></i>
                                        <span>map</span>
                                    </a>


                                </li>
                                <li>
                                    <a className='menu-left' href=''>
                                        <i class="fa fa-bell" style={{ marginRight: '10px' }}></i>
                                        <span>notification</span>
                                    </a>


                                </li>
                                <li>
                                    <a className='menu-left' href=''>
                                        <i class="fa fa-leaf" style={{ marginRight: '10px' }}></i>
                                        <span>Icon</span>
                                    </a>

                                </li>
                                <li>
                                    <a className='menu-left' href=''>
                                        <i class="fa fa-rocket" style={{ marginRight: '10px' }}></i>
                                        <span>UI Elements</span>
                                    </a>


                                </li>
                            </ul>
                        </div>
                        {/* End Sidebar */}
                        <div className="clearfix" />
                    </div>
                    {/* Sidebar -left */}
                </div>

                <div className="content-page">
                    <div className="content">

                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-12">
                                    <div className="page-title-box">
                                        <div className="page-title-right">
                                            <ol className="breadcrumb m-0">
                                                <li className="breadcrumb-item"><a href="">FB</a></li>
                                                <li className="breadcrumb-item active">Dashboard</li>
                                            </ol>
                                        </div>
                                        <h4 className="page-title">Dashboard</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 col-xl-3">
                                    <div className="card-box tilebox-one">
                                        <i className="fa fa-suitcase float-right m-0 h2 text-muted" />
                                        <h6 className="text-muted text-uppercase mt-0">Capacity</h6>
                                        <h3 className="my-3" data-plugin="counterup">105GB</h3>
                                        <span className="badge badge-success mr-1"> +11% </span> <span className="text-muted">From previous period</span>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3">
                                    <div className="card-box tilebox-one" >
                                        <i className="fas fa-wallet float-right m-0 h2 text-muted" />
                                        <h6 className="text-muted text-uppercase mt-0" >Revenue</h6>
                                        <h3 className="my-3">$<span data-plugin="counterup">46,782</span></h3>
                                        <span className="badge badge-danger mr-1"> -29% </span> <span className="text-muted">From previous period</span>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3">
                                    <div className="card-box tilebox-one">
                                        <i className="fa fa-times float-right m-0 h2 text-muted" />
                                        <h6 className="text-muted text-uppercase mt-0" >Errors</h6>
                                        <h3 className="my-3"><span data-plugin="counterup">23</span></h3>
                                        <span className="badge badge-pink mr-1"> 0% </span> <span className="text-muted">From previous period</span>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3">
                                    <div className="card-box tilebox-one">
                                        <i className="fa fa-user float-right m-0 h2 text-mute" />
                                        <h6 className="text-muted text-uppercase mt-0">Follower</h6>
                                        <h3 className="my-3" data-plugin="counterup">+45</h3>
                                        <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted">Last year</span>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-xl-8">
                                    <div className="card-box">
                                        <h4 className="header-title mb-3">Users Behavior</h4>
                                        <div className="text-center">
                                            <ul className="list-inline chart-detail-list mb-0">
                                                <li className="list-inline-item">
                                                    <h6 className="text-info"><i className="mdi mdi-circle-outline mr-1" />Series A</h6>
                                                </li>
                                                <li className="list-inline-item">
                                                    <h6 className="text-success"><i className="mdi mdi-triangle-outline mr-1" />Series B</h6>
                                                </li>
                                                <li className="list-inline-item">
                                                    <h6 className="text-muted"><i className="mdi mdi-square-outline mr-1" />Series C</h6>
                                                </li>
                                            </ul>
                                        </div>
                                        <div style={{ height: '320px' }}>

                                            <Bar
                                                data={dataBar}
                                                options={{
                                                    title: {
                                                        display: true,
                                                        fontSize: 25
                                                    },
                                                    legend: {
                                                        display: true,
                                                        position: "right"
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-4">
                                    <div className="card-box">
                                        <h4 className="header-title mb-3">Trends Monthly</h4>

                                        <div style={{ height: '349px' }} >
                                            <Doughnut
                                                data={state}
                                                className='graph'
                                                options={{
                                                    title: {
                                                        display: true,
                                                        text: 'Tổng đơn hàng',
                                                        fontSize: 20
                                                    },
                                                    legend: {
                                                        display: true,
                                                        position: 'right'
                                                    }
                                                }}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>

                </div>

            </div>

        </div>
    )



}
export default Admin;