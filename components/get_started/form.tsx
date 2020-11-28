import React from "react";
import fetch from "node-fetch";

type ModalProps = {
  isSuccess: boolean;
  title: string;
  content: string;
  onClose: () => void;
};

class Modal extends React.PureComponent<ModalProps> {
  public render() {
    const successIcon = (
      <svg
        className="w-6 h-6 text-green-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    );
    const failureIcon = (
      <svg
        className="w-6 h-6 text-red-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    );

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div
              className="absolute inset-0 bg-gray-500 opacity-75"
              onClick={() => this.props.onClose()}
            ></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="p-4 bg-white sm:p-8">
              <div
                className="absolute top-0 right-0 m-4 text-gray-300 cursor-pointer hover:text-gray-500"
                onClick={() => this.props.onClose()}
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>

              <div className="sm:flex sm:items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto sm:mx-0 sm:h-10 sm:w-10">
                  {this.props.isSuccess ? successIcon : failureIcon}
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg font-medium leading-6 text-gray-900"
                    id="modal-headline"
                  >
                    {this.props.title}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {this.props.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

type State =
  | {
      isModalOpen: true;
      modalProps: ModalProps;
    }
  | {
      isModalOpen: false;
      isSubmitting: boolean;
    };

export default class Component extends React.PureComponent<{}, State> {
  private firstNameRef = React.createRef<HTMLInputElement>();
  private lastNameRef = React.createRef<HTMLInputElement>();
  private emailRef = React.createRef<HTMLInputElement>();

  public constructor(props: {}) {
    super(props);

    this.state = { isModalOpen: false, isSubmitting: false };
  }

  private async _handleSubmit() {
    this.setState({
      isModalOpen: false,
      isSubmitting: true,
    });

    const response = await fetch("/api/get-started", {
      method: "POST",
      body: JSON.stringify({
        email: this.emailRef.current?.value,
        first_name: this.firstNameRef.current?.value,
        last_name: this.lastNameRef.current?.value,
      }),
    });

    this.setState({
      isModalOpen: false,
      isSubmitting: false,
    });

    if (true) {
      const responseJson = (await response.json()) as
        | { success: false; reason: string }
        | { success: true };

      if (responseJson.success) {
        this.setState({
          isModalOpen: true,
          modalProps: {
            isSuccess: true,
            title: "Thanks for joining the Ficra waitlist!",
            content:
              "You'll get a confirmation email in a bit, but feel free to reach out to support@getficra.com or ziyad.edher@getficra.com at any point!",
            onClose: () => this.setState({ isModalOpen: false }),
          },
        });
      } else {
        switch (responseJson.reason) {
          case "email-exists":
            this.setState({
              isModalOpen: true,
              modalProps: {
                isSuccess: false,
                title: "Email already exists!",
                content:
                  "We're flattered that you're trying to get on the waitlist again, please reach out to ziyad.edher@getficra.com to get off the waitlist quicker!",
                onClose: () => this.setState({ isModalOpen: false }),
              },
            });
            break;
          case "invalid-input":
            this.setState({
              isModalOpen: true,
              modalProps: {
                isSuccess: false,
                title: "Invalid input",
                content:
                  "Something went wrong when recieving your sign up, try submitting again and if this keeps happening reach out to support@getficra.com.",
                onClose: () => this.setState({ isModalOpen: false }),
              },
            });
            break;
          default:
            this.setState({
              isModalOpen: true,
              modalProps: {
                isSuccess: false,
                title: "Something went wrong...",
                content: `Please contact support at support@getficra.com with the code ${responseJson.reason}`,
                onClose: () => this.setState({ isModalOpen: false }),
              },
            });
            break;
        }
      }
    } else {
      this.setState({
        isModalOpen: true,
        modalProps: {
          isSuccess: false,
          title: "Something went wrong...",
          content: `Please contact support at support@getficra.com with the code ${response.status}`,
          onClose: () => this.setState({ isModalOpen: false }),
        },
      });
    }
  }

  public render() {
    return (
      <div className="max-w-2xl mx-auto mt-24 overflow-hidden lg:text-center">
        {this._renderIntro()}
        {this._renderFormElements()}
        {this._maybeRenderModal()}
      </div>
    );
  }

  private _renderIntro() {
    return (
      <div className="mt-2">
        <h1 className="text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          Supercharge your ML deployment
        </h1>
        <p className="mt-4 text-base text-gray-500 sm:text-xl lg:mx-auto">
          We're currently at-capacity making sure our customers are 100%
          satisfied with their deployments. Sign up below to secure your spot as
          we expand!
        </p>
      </div>
    );
  }

  private _renderFormElements() {
    return (
      <form
        className="p-2 mt-8 space-y-4 text-left"
        onSubmit={(e) => {
          e.preventDefault();
          this._handleSubmit();
        }}
      >
        <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
          <div>
            <label
              htmlFor="first_name"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              ref={this.firstNameRef}
              type="text"
              name="first_name"
              id="first_name"
              autoComplete="given-name"
              className="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              ref={this.lastNameRef}
              type="text"
              name="last_name"
              id="last_name"
              autoComplete="family-name"
              className="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
        </div>
        <div className="items-end space-y-4 justify-items-stretch sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4">
          <div className="col-span-2">
            <label
              htmlFor="email_address"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              ref={this.emailRef}
              type="text"
              name="email_address"
              id="email_address"
              autoComplete="email"
              className="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="col-span-1">{this._renderSubmitButton()}</div>
        </div>
      </form>
    );
  }

  private _maybeRenderModal() {
    if (this.state.isModalOpen) {
      return <Modal {...this.state.modalProps} />;
    }

    return null;
  }

  private _renderSubmitButton() {
    if (this.state.isModalOpen) {
      return (
        <button className="w-full px-4 py-2 text-sm font-bold text-gray-400 bg-gray-300 border border-transparent rounded-md shadow-sm focus:outline-none">
          Join Ficra
        </button>
      );
    } else if (this.state.isSubmitting) {
      return (
        <button className="w-full px-4 py-2 text-sm font-bold text-gray-400 bg-gray-300 border border-transparent rounded-md shadow-sm focus:outline-none">
          <svg
            className="w-6 h-6 mx-auto animate-spin"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
        </button>
      );
    } else {
      return (
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-bold text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Join Ficra
        </button>
      );
    }
  }
}
