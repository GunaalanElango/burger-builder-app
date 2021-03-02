import React, { Component } from "react";
import Aux from "../Auxiliary/Auxiliary";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
      hasError: false,
    };

    confirmErrorHandler = () => {
      this.setState({ hasError: false });
    };

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(
        (req) => {
          this.setState({ hasError: false });
          return req;
        },
        (error) => {
          this.setState({ error: error, hasError: true });
          return error;
        }
      );

      this.resInterceptors = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error, hasError: true });
          return error;
        }
      );
    }

    render() {
      return (
        <Aux>
          <Modal
            showModal={this.state.hasError}
            click={this.confirmErrorHandler}
          >
            {this.state.hasError ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
