var ComLeft = React.createClass({
    render : function(){
        return(
            <div className="conversation-wrap col-lg-3">
                <div className="media conversation">
                    <a className="pull-left" href="#">
                        <img className="media-object" src="images/no-images.png"/>
                    </a>
                    <div className="media-body">
                        <h5 className="media-heading">Naimish Sakhpara</h5>
                        <small>Hello</small>
                    </div>
                </div>
                <div className="media conversation">
                    <a className="pull-left" href="#">
                        <img className="media-object" src="images/no-images.png"/>
                    </a>
                    <div className="media-body">
                        <h5 className="media-heading">Naimish Sakhpara</h5>
                        <small>Hello</small>
                    </div>
                </div>
                <div className="media conversation">
                    <a className="pull-left" href="#">
                        <img className="media-object" src="images/no-images.png"/>
                    </a>
                    <div className="media-body">
                        <h5 className="media-heading">Naimish Sakhpara</h5>
                        <small>Hello</small>
                    </div>
                </div>
                <div className="media conversation">
                    <a className="pull-left" href="#">
                        <img className="media-object" src="images/no-images.png"/>
                    </a>
                    <div className="media-body">
                        <h5 className="media-heading">Naimish Sakhpara</h5>
                        <small>Hello</small>
                    </div>
                </div>
                <div className="media conversation">
                    <a className="pull-left" href="#">
                        <img className="media-object" src="images/no-images.png"/>
                    </a>
                    <div className="media-body">
                        <h5 className="media-heading">Naimish Sakhpara</h5>
                        <small>Hello</small>
                    </div>
                </div>

                <div className="media conversation">
                    <a className="pull-left" href="#">
                        <img className="media-object" src="images/no-images.png"/>
                    </a>
                    <div className="media-body">
                        <h5 className="media-heading">Naimish Sakhpara</h5>
                        <small>Hello</small>
                    </div>
                </div>

                <div className="media conversation">
                    <a className="pull-left" href="#">
                        <img className="media-object" src="images/no-images.png"/>
                    </a>
                    <div className="media-body">
                        <h5 className="media-heading">Naimish Sakhpara</h5>
                        <small>Hello</small>
                    </div>
                </div>
            </div>
        );
    }
});

var ComRight = React.createClass({
    render : function(){
        return(
            <div className="message-wrap col-lg-8">
                <div className="msg-wrap">


                    <div className="media msg ">
                        <a className="pull-left" href="#">
                            <img className="media-object" src="images/no-images.png"/>
                        </a>
                        <div className="media-body">
                            <small className="pull-right time"><i className="fa fa-clock-o"></i> 12:10am</small>
                            <h5 className="media-heading">Naimish Sakhpara</h5>
                            <small className="col-lg-10">Location H-2, Ayojan Nagar, Near Gate-3, Near
                                Shreyas Crossing Dharnidhar Derasar,
                                Paldi, Ahmedabad 380007, Ahmedabad,
                                India
                                Phone 091 37 669307
                                Email aapamdavad.district@gmail.com</small>
                        </div>
                    </div>
                    <div className="alert alert-info msg-date">
                        <strong>Today</strong>
                    </div>
                    <div className="media msg">
                        <a className="pull-left" href="#">
                            <img className="media-object" src="images/no-images.png"/>
                        </a>
                        <div className="media-body">
                            <small className="pull-right time"><i className="fa fa-clock-o"></i> 12:10am</small>

                            <h5 className="media-heading">Naimish Sakhpara</h5>
                            <small className="col-lg-10">Arnab Goswami: "Some people close to Congress Party and close to the government had a #secret #meeting in a farmhouse in Maharashtra in which Anna Hazare send some representatives and they had a meeting in the discussed how to go about this all fast and how eventually this will end."</small>
                        </div>
                    </div>
                    <div className="media msg">
                        <a className="pull-left" href="#">
                            <img className="media-object" src="images/no-images.png"/>
                        </a>
                        <div className="media-body">
                            <small className="pull-right time"><i className="fa fa-clock-o"></i> 12:10am</small>

                            <h5 className="media-heading">Naimish Sakhpara</h5>
                            <small className="col-lg-10">Arnab Goswami: "Some people close to Congress Party and close to the government had a #secret #meeting in a farmhouse in Maharashtra in which Anna Hazare send some representatives and they had a meeting in the discussed how to go about this all fast and how eventually this will end."</small>
                        </div>
                    </div>

                    <div className="media msg">
                        <a className="pull-left" href="#">
                            <img className="media-object" src="images/no-images.png"/>
                        </a>
                        <div className="media-body">
                            <small className="pull-right time"><i className="fa fa-clock-o"></i> 12:10am</small>
                            <h5 className="media-heading">Naimish Sakhpara</h5>

                            <small className="col-lg-10">Arnab Goswami: "Some people close to Congress Party and close to the government had a #secret #meeting in a farmhouse in Maharashtra in which Anna Hazare send some representatives and they had a meeting in the discussed how to go about this all fast and how eventually this will end."</small>
                        </div>
                    </div>

                </div>
                <div className="btn-panel">
                    <a href="" className=" col-lg-3 btn   send-message-btn " role="button"><i className="fa fa-cloud-upload"></i> Add Files</a>
                    <a href="" className=" col-lg-4 text-right btn   send-message-btn pull-right" role="button"><i className="fa fa-plus"></i> Send Message</a>
                </div>
                <div className="send-wrap ">
                    <textarea className="form-control send-message" rows="3" placeholder="Write a reply..."></textarea>
                </div>

            </div>
        );
    }
});

var Toolbar = React.createClass({
    render : function(){
        return(
            <div className="row">
                <div className="col-lg-3">
                    <div className="btn-panel btn-panel-conversation">
                        <a href="" className="btn  col-lg-6 send-message-btn " role="button"><i className="fa fa-search"></i> Search</a>
                        <a href="" className="btn  col-lg-6  send-message-btn pull-right" role="button"><i className="fa fa-plus"></i> New Message</a>
                    </div>
                </div>

                <div className="col-lg-offset-1 col-lg-7">
                    <div className="btn-panel btn-panel-msg">

                        <a href="" className="btn  col-lg-3  send-message-btn pull-right" role="button"><i className="fa fa-gears"></i> Settings</a>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <div className="container">
        <Toolbar></Toolbar>

        <div className="row">
            <div id="chat_left">
                <ComLeft></ComLeft>
            </div>
            <div id="chat_right">
                <ComRight></ComRight>
            </div>

        </div>
    </div>
    , document.getElementById("wrapper")
);