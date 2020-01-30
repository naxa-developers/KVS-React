import React, { Component } from "react";
import Multiselect from "./Multiselect";
import {
    BoxLoading,
    JumpCircleLoading,
    RotateCircleLoading
} from "react-loadingg";
import MoreFilter from "./MoreFilter";

class HeaderFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedVal: [],
            openeddropdown: 0,
            toogle: false,
            moreOpendropdown: 0,
            moreselectedVal: [],
            togglediv: false,
            togglediv1: false,
            togglediv2: false,
            selectValues: "",
            categoryVal: "",
            selCat: "",
            totalCat: "",
            newmore: "",
            toDel: [],
            expression: ["=", ">", "<"],
            newselected: [],
            newothers: []
        };
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.setWrapperRef1 = this.setWrapperRef1.bind(this);
        this.setWrapperRef2 = this.setWrapperRef2.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    storeselectedvalue = () => {
        this.props.filterparam.map(e => {
            this.state.selectedVal.push({ field: e, value: [] });
        });
    };

    storemoreselectedvalue = () => {
        this.props.morefilterparam.map(e => {
            this.state.moreselectedVal.push({ field: e, value: [] });
        });
    };

    toggleForm = () => {
        this.setState({
            ...this.state,
            toogle: !this.state.toogle
        });
    };

    reset = () => {
        this.props.fetchedData()
        let newselectedVal = [];
        this.props.filterparam.map(e => {
            newselectedVal.push({ field: e, value: [] });
        });
        this.setState({
            selectedVal: newselectedVal
        });
    };

    onApply = () => {
        // console.log(this.state.selectedVal, 'hey selected val');
        console.log(this.state.newmore, 'hey moreselected val');
        this.props.onApply(this.state.selectedVal);
    };

    setSelected = e => {
        this.setState({ openeddropdown: e });
    };

    setMoreSelected = e => {
        this.setState({ moreOpendropdown: e });
    };

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    setWrapperRef1(node) {
        this.wrapperRef1 = node;
    }

    setWrapperRef2(node) {
        this.wrapperRef2 = node;
    }

    toggleddiv2 = () => {
        this.setState({
            togglediv: false,
            togglediv1: false,
            togglediv2: !this.state.togglediv2,
        });
    };

    toggleddiv = () => {
        this.setState({
            togglediv2: false,
            togglediv1: false,
            togglediv: !this.state.togglediv,
        });
    };

    toggleddiv1 = () => {
        this.setState({
            togglediv: false,
            togglediv2: false,
            togglediv1: !this.state.togglediv1,
        });
    };

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                togglediv: false
            });
        }
        if (this.wrapperRef1 && !this.wrapperRef1.contains(event.target)) {
            this.setState({
                togglediv1: false
            });
        }
        if (this.wrapperRef2 && !this.wrapperRef2.contains(event.target)) {
            this.setState({
                togglediv2: false
            });
        }
    }

    setVal = i => this.setState({ moreselectedVal: i });

    newsetVal = i => this.setState({ newmore: i });

    handleChange = v => {
        
        let value = v.target.value;
        console.log("isSelected", value);
        
        // let selected = this.state.moreselectedVal.filter(e => {
        //     return e.field == v.target.value;
        // });
        // let others = this.state.moreselectedVal.filter(e => {
        //     return e.field != v.target.value;
        // });
        // let valuetoset = [];
        // selected[0].length != 0 && valuetoset == selected[0].value;
        // if (!selected[0].value.includes(value)) {
        //     valuetoset.push(value);
        // } else {
        //     valuetoset = selected[0].value.filter(e => e != value);
        // }
        // let jsonwrapper = [];
        // others.length != 0 && jsonwrapper.push(...others);
        // jsonwrapper.push({ field: v.target.value, value: valuetoset });
        // this.setVal(jsonwrapper);
        // this.setState({ selCat: valuetoset, categoryVal: value });
    };

    anotherHandler = (v, data) => {
        let value = v.target.value;
        this.state.newselected.push({ field: value, value: [] });
        data.dropdowns.filter(e => {
            if (e !== value) {
                this.state.newothers.push({ field: e, value: [] });
            }
        });
        let newvaluetoset = [];
        this.state.newselected[0].length != 0 && newvaluetoset == this.state.newselected[0].value;
        if (!this.state.newselected[0].value.includes(value)) {
            newvaluetoset.push(value);
        } else {
            newvaluetoset = this.state.newselected[0].value.filter(e => e != value);
        }
        let heyjsonwrapper = [];
        this.state.newothers !== 0 && heyjsonwrapper.push(...this.state.newothers);
        heyjsonwrapper.push({ field: value, value: newvaluetoset });
        this.newsetVal(heyjsonwrapper);
        this.state.newselected.map((data) => {
            if (data.field !== value) {
                console.log(data.field)
                this.state.newselected.push({ field: data.field, value: [] })
            }
        })
        console.log(this.state.newselected, 'hey selected')
    };

    removeselected = val => {
        let selected = this.state.moreselectedVal.filter(e => {
            return e.field == val;
        });
        let others = this.state.moreselectedVal.filter(e => {
            return e.field != val;
        });

        let neww = selected.filter(e => e != val);
        this.setState({
            selCat: ""
        });
        let newjsonwrapper = [];
        others.length != 0 && newjsonwrapper.push(...others);
        newjsonwrapper.push({ field: this.props.field, value: neww });
        this.setVal(newjsonwrapper);
    };

    render() {
        return (
            <>
                <div className="filter">
                    <h2>
                        <span>Saptakoshi</span> municipality
                    </h2>

                    <div className="row">
                        {// this.props.Categories!=''?
                            this.props.Categories.map((e, i) => {
                                return (
                                    <div className="col-md-6" key={i}>
                                        <Multiselect
                                            selected={this.state.openeddropdown}
                                            setSelected={this.setSelected}
                                            setVal={i => this.setState({ selectedVal: i })}
                                            selectedVal={this.state.selectedVal}
                                            dropdown={e.dropdown}
                                            field={e.field}
                                            id={e.id}
                                        />
                                    </div>
                                );
                            })}
                    </div>
                    <div className="more">
                        <div
                            className="toggle_form"
                            id="clickable_form"
                            style={{ display: `${this.state.toogle ? "block" : "none"}` }}
                        >
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <div className="kvs-select">
                                            <div
                                                ref={this.setWrapperRef}
                                                className={
                                                    this.state.togglediv
                                                        ? "select-wrapper select-toggle"
                                                        : "select-wrapper"
                                                }
                                                onClick={() => this.toggleddiv()}
                                            >
                                                <span
                                                    className="select-item"
                                                >
                                                    Categories
                                                </span>
                                                <ul style={{ position: "absolute" }}>
                                                    {this.props.moreCategories.map((data, i) => {
                                                        let sel = this.state.moreselectedVal.filter(
                                                            e => e.field === data.field
                                                        );
                                                        return (
                                                            <li key={i}>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="custom-control-input"
                                                                        id={`${data.field}${data.id}`}
                                                                        field={data.field}
                                                                        value={data.field}
                                                                        // checked={
                                                                        //     sel.length != 0 &&
                                                                        //     sel[0].value.length != 0 &&
                                                                        //     sel[0].value.includes(data.field)
                                                                        // }
                                                                        onChange={i => this.handleChange(i)}
                                                                    />
                                                                    <label
                                                                        className="custom-control-label"
                                                                        htmlFor={`${data.field}${data.id}`}
                                                                    >
                                                                        {data.field}{" "}
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                            <div className="selected-data">
                                                {this.state.selCat.length != 0 &&
                                                    this.state.selCat.map((data, i) => {
                                                        return (
                                                            <span key={i}>
                                                                {data}{" "}
                                                                <small
                                                                    onClick={() => {
                                                                        this.removeselected(data);
                                                                    }}
                                                                >
                                                                    x
                                                                </small>{" "}
                                                            </span>
                                                        );
                                                    })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <div className="kvs-select">
                                            <div
                                                ref={this.setWrapperRef1}
                                                onClick={() => this.toggleddiv1()}
                                                className={
                                                    this.state.togglediv1
                                                        ? "select-wrapper select-toggle"
                                                        : "select-wrapper"
                                                }
                                            >
                                                <span
                                                    className="select-item"
                                                >
                                                    Expression
                                                </span>
                                                <ul>
                                                    {this.state.categoryVal !== '' &&
                                                        this.state.expression.map((data, i) => {
                                                            return (
                                                                <li key={i}>
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input
                                                                            type="checkbox"
                                                                            className="custom-control-input"
                                                                            key={i}
                                                                            name={data}
                                                                            value={i}
                                                                            checked={false}
                                                                        />
                                                                        <label
                                                                            className="custom-control-label"
                                                                            htmlFor={i}
                                                                        >
                                                                            {data}
                                                                        </label>
                                                                    </div>
                                                                </li>
                                                            );
                                                        })}
                                                </ul>
                                            </div>
                                            <div className="selected-data">
                                                {this.state.selCat.length != 0 &&
                                                    this.state.selCat.map((data, i) => {
                                                        return (
                                                            <span key={i}>
                                                                {data}{" "}
                                                                <small
                                                                    onClick={() => {
                                                                        this.removeselected(data);
                                                                    }}
                                                                >
                                                                    x
                                                                </small>{" "}
                                                            </span>
                                                        );
                                                    })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <div className="kvs-select">
                                            <div
                                                ref={this.setWrapperRef2}
                                                onClick={() => this.toggleddiv2()}
                                                className={
                                                    this.state.togglediv2
                                                        ? "select-wrapper select-toggle"
                                                        : "select-wrapper"
                                                }
                                            >
                                                <span
                                                    className="select-item"
                                                >
                                                    Values
                                                </span>
                                                <ul>
                                                    {this.props.moreCategories.map((datas, i) => {
                                                        return (
                                                            <div key={i}>
                                                                {datas.field === this.state.categoryVal &&
                                                                    datas.dropdowns.map((data, i) => {
                                                                        let sel = datas.dropdowns.filter(
                                                                            e => e === data
                                                                        );
                                                                        return (
                                                                            <li key={i}>
                                                                                <div
                                                                                    key={i}
                                                                                    className="custom-control custom-checkbox"
                                                                                >
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        className="custom-control-input"
                                                                                        id={`${data}${i}`}
                                                                                        field={data}
                                                                                        value={data}
                                                                                        checked={sel.length !== '' && sel.push(data)}
                                                                                        onChange={i =>
                                                                                            this.anotherHandler(i, datas)
                                                                                        }
                                                                                    />
                                                                                    <label
                                                                                        className="custom-control-label"
                                                                                        htmlFor={`${data}${i}`}
                                                                                    >
                                                                                        {data}
                                                                                    </label>
                                                                                </div>
                                                                            </li>
                                                                        );
                                                                    })}
                                                                {datas.field === null &&
                                                                    datas.dropdowns.map((data, i) => {
                                                                        return <div key={i}></div>;
                                                                    })}
                                                            </div>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                            <div className="selected-data">
                                                {this.state.selCat.length != 0 &&
                                                    this.state.selCat.map((data, i) => {
                                                        return (
                                                            <span key={i}>
                                                                {data}{" "}
                                                                <small
                                                                    onClick={() => {
                                                                        this.removeselected(data);
                                                                    }}
                                                                >
                                                                    x
                                                                </small>{" "}
                                                            </span>
                                                        );
                                                    })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            role="button"
                            className="common-button-border icon-button filter_button "
                            onClick={() => this.toggleForm()}
                        >
                            <i className="material-icons">filter_list</i>
                            {`${!this.state.toogle ? "More Filters" : "Show Less"}`}
                        </button>
                    </div>
                    <div className="buttons">
                        <button
                            role="button"
                            className="common-button-bg"
                            onClick={() => {
                                this.onApply();
                            }}
                        >
                            apply
            </button>
                        <button
                            role="button"
                            className="common-button-border no-border"
                            onClick={() => this.reset()}
                        >
                            Clear
            </button>
                    </div>
                </div>
            </>
        );
    }
}
export default HeaderFilter;
