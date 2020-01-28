import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CircularProgress from "@material-ui/core/CircularProgress";
import { addItemInCart } from "../../Redux/Actions";
import Api from "../../Api";
import Item from "../Item/Item";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { withTheme } from "@material-ui/core";



class ConnectedDetails extends Component {
  constructor(props) {
    super(props);

    this.isCompMounted = false;

    this.state = {
      relatedItems: [],
      quantity: 1,
      item: null,
      loading: false
    };
  }

  async fetchProductUsingID(id) {
    this.setState({ loading: true });

    let item = await Api.getItemUsingID(id);

    let relatedItems = await Api.searchItems({
      category: item.category,
    });

    if (this.isCompMounted) {
      this.setState({
        item,
        relatedItems: relatedItems.data.filter(x => x.id !== item.id),
        loading: false,
      });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetchProductUsingID(this.props.match.params.id);

    }
  }


  componentDidMount() {
    this.isCompMounted = true;
    this.fetchProductUsingID(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.isCompMounted = false;
  }



  render() {
    if (this.state.loading) {
      return <CircularProgress className="circular" />;
    }

    if (!this.state.item) {
      return null;
    }
    return (
      <div style={{ padding: 10 }}>
        <div
          style={{
            marginBottom: 20,
            marginTop: 10,
            fontSize: 24
          }}
        >
          {this.state.item.name}
        </div>
        <div style={{ display: "flex" }}>
          <img src={this.state.item.imageUrls[0]} alt="" width={250} height={250} style={{ borderRadius: "5%", objectFit: "cover" }} />
          <div
            style={{
              flex: 1,
              marginLeft: 20,
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div style={{ fontSize: 18, marginTop: 10 }}>
              Price: {this.state.item.price} $
            </div>
            {this.state.item.popular && (
              <span style={{ marginTop: 5, fontSize: 14, color: "#228B22" }}>
                (Popular product)
              </span>
            )}

           
         
          </div>
        </div>

        {/* Item description */}
        <Button
          style={{
            marginLeft: 5,
            maxHeight: 200,
            fontSize: 16,
            overflow: "auto",
            backgroundColor: "#000000",
            textDecoration: 'none',
          }}
        >

          <a href={this.state.item.url ? this.state.item.url : <div  style={{ color: "#FFFFFF", textDecoration: 'none',}}>Not available</div>}>
          {this.state.item.productlink ? this.state.item.productlink : <div  style={{ color: "#FFFFFF",textDecoration: 'none', }}>Not available</div>}
          </a>
        </Button>
        <div
          style={{
            marginTop: 30,
            marginBottom: 20,
            fontSize: 24,
          }}
        >
          Product Description
        </div>

        {this.state.item.description ? this.state.item.description : <div  style={{ color: "#FFFFFF",textDecoration: 'none', }}>Not available</div>}
        
        

        {/* Relateditems */}
        <div
          style={{
            marginTop: 30,
            marginBottom: 10,
            fontSize: 24
          }}
        >
          Related Items
        </div>
        {
          this.state.relatedItems.slice(0, 3).map(x => {
            return <Item key={x.id} item={x} />;
          })
        }
      </div >
    );
  }
}

let Details = connect()(ConnectedDetails);
export default Details;
