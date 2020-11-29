import Link from "next/link";
import React from "react";

enum CodeStep {
  Authenticate,
  Deploy,
  Infer,
}

class CodeBlock extends React.PureComponent<
  {
    authenticate: React.RefObject<HTMLDivElement>;
    deploy: React.RefObject<HTMLDivElement>;
    infer: React.RefObject<HTMLDivElement>;
  },
  { step: CodeStep }
> {
  state = {
    step: CodeStep.Authenticate,
  };

  public render(): JSX.Element {
    return (
      <pre>
        <code className="text-sm text-white">
          {this._renderStepCode(this.state.step)}
        </code>
      </pre>
    );
  }

  public componentDidMount() {
    document.addEventListener("scroll", () => {
      const threshold = window.innerHeight / 2;
      if (
        !(
          this.props.authenticate.current &&
          this.props.deploy.current &&
          this.props.infer.current
        )
      ) {
        return;
      }

      if (this.props.infer.current?.getBoundingClientRect().top <= threshold) {
        this.setState(() => ({
          step: CodeStep.Infer,
        }));
      } else if (
        this.props.deploy.current?.getBoundingClientRect().top <= threshold
      ) {
        this.setState(() => ({
          step: CodeStep.Deploy,
        }));
      } else if (
        this.props.authenticate.current?.getBoundingClientRect().top <=
        threshold
      ) {
        this.setState(() => ({
          step: CodeStep.Authenticate,
        }));
      }
    });
  }

  private _renderStepCode(step: CodeStep): JSX.Element {
    switch (step) {
      case CodeStep.Authenticate:
        return this._renderAuthenticateCode();
      case CodeStep.Deploy:
        return this._renderDeployCode();
      case CodeStep.Infer:
        return this._renderInferCode();
    }
  }

  private _renderAuthenticateCode(): JSX.Element {
    return (
      <>
        <span className="text-gray-400"># STEP ONE: Authenticate</span>
        <br />
        <span className="text-pink-400">import</span>{" "}
        <span className="text-green-400">requests</span>
        <br />
        <span className="text-blue-400">FICRA_API_KEY</span> ={" "}
        <span className="text-yellow-400">
          "this_is_my_super_secret_api_key"
        </span>
        <br />
      </>
    );
  }

  private _renderDeployCode(): JSX.Element {
    return (
      <>
        <span className="text-gray-400"># STEP TWO: Deploy</span>
        <br />
        <span className="text-blue-300">model_id</span> ={" "}
        <span className="text-yellow-400 ">"my_model_id"</span>
        <br />
        <span className="text-blue-300">model</span> ={" "}
        <span className="text-red-400">open</span>(
        <span className="text-yellow-400 ">"model.onnx"</span>,{" "}
        <span className="text-yellow-400 ">"rb"</span>)
        <br />
        <span className="text-green-400">requests</span>.
        <span className="text-red-400">post</span>(
        <br />
        <span className="text-yellow-400 ">
          {"    "}"https://api.getficra.com/models/add"
        </span>
        ,
        <br />
        {"    {"}
        <br />
        {"        "}
        <span className="text-yellow-400 ">"key"</span>:{" "}
        <span className="text-blue-400">FICRA_API_KEY</span>,
        <br />
        {"        "}
        <span className="text-yellow-400 ">"model_id"</span>:{" "}
        <span className="text-blue-300">model_id</span>,
        <br />
        {"    }"},
        <br />
        {"    "}
        <span className="text-blue-300">files</span>={"{"}
        <br />
        {"        "}
        <span className="text-yellow-400 ">"model"</span>:{" "}
        <span className="text-blue-300">model</span>,
        <br />
        {"    }"}
        <br />
        )
        <br />
      </>
    );
  }

  private _renderInferCode(): JSX.Element {
    return (
      <>
        <span className="text-gray-400"># STEP THREE: Infer</span>
        <br />
        <span className="text-blue-300">model_id</span> ={" "}
        <span className="text-yellow-400 ">"my_model_id"</span>
        <br />
        <span className="text-blue-300">input_data</span> = [
        <span className="text-green-200 ">1.0</span>,{" "}
        <span className="text-green-200 ">2.0</span>,{" "}
        <span className="text-green-200 ">3.0</span>]
        <br />
        <span className="text-blue-300">response</span> ={" "}
        <span className="text-green-400">requests</span>.
        <span className="text-red-400">post</span>(
        <br />
        <span className="text-yellow-400 ">
          {"    "}"https://api.getficra.com/infer"
        </span>
        ,
        <br />
        {"    {"}
        <br />
        {"        "}
        <span className="text-yellow-400 ">"key"</span>:{" "}
        <span className="text-blue-400">FICRA_API_KEY</span>,
        <br />
        {"        "}
        <span className="text-yellow-400 ">"model_id"</span>:{" "}
        <span className="text-blue-300">model_id</span>,
        <br />
        {"        "}
        <span className="text-yellow-400 ">"inputs"</span>:{" "}
        <span className="text-blue-300">input_data</span>,
        <br />
        {"    }"}
        <br />
        )
        <br />
      </>
    );
  }
}

export default class Usage extends React.PureComponent {
  public static readonly USAGE_ID = "usage";
  private codeMarkers = {
    authenticate: React.createRef<HTMLDivElement>(),
    deploy: React.createRef<HTMLDivElement>(),
    infer: React.createRef<HTMLDivElement>(),
  };

  public render() {
    return (
      <section id={Usage.USAGE_ID} className="relative pt-24 sm:px-12 lg:pt-32">
        {this._renderIntro()}
        {this._renderUsageFlow()}
      </section>
    );
  }

  private _renderIntro() {
    return (
      <div className="pb-12 lg:pb-24 lg:text-center">
        <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
          Usage
        </h2>
        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          Production in one, two, three
        </p>
        <p className="max-w-xl mt-4 text-base text-gray-500 sm:text-xl lg:mx-auto">
          It's simple to get started with Ficra's free shared model serving
          instances.
        </p>
      </div>
    );
  }

  private _renderUsageFlow() {
    return (
      <div className="flex items-stretch justify-center w-full lg:space-x-20">
        {this._renderCode()}
        {this._renderUsageAside()}
      </div>
    );
  }

  private _renderCode() {
    return (
      <div className="flex-shrink-0 hidden w-1/2 lg:block">
        <div className="sticky shadow-lg top-1/3">
          <div className="flex items-center justify-start h-8 px-4 space-x-2 bg-gray-500 rounded-t-lg">
            <span className="relative inline-flex w-3 h-3 bg-red-500 rounded-full" />
            <span className="relative inline-flex w-3 h-3 bg-yellow-300 rounded-full" />
            <span className="relative inline-flex w-3 h-3 bg-green-400 rounded-full" />
          </div>
          <div className="relative font-mono">
            <div className="absolute w-8 h-full mt-8 text-sm leading-6 text-right text-gray-400">
              {(() =>
                Array.from(Array(13).keys()).map((i) => (
                  <p key={i}>{i + 1}</p>
                )))()}
            </div>
            <div className="w-full p-8 pl-12 transition-all bg-gray-700 rounded-b-lg h-96">
              <CodeBlock {...this.codeMarkers} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  private _renderUsageAside() {
    return (
      <aside className="max-w-3xl space-y-12 lg:max-w-lg lg:pb-48 lg:space-y-48">
        {this._renderUsageItem(
          "Step One",
          "Authenticate",
          "When you sign up with Ficra you get a free API key that lets you connect to our managed Ficra instance to serve your models.",
          this.codeMarkers.authenticate,
        )}
        {this._renderUsageItem(
          "Step Two",
          "Deploy",
          "Once you convert your model to ONNX format you simply upload the model to a Ficra instance and we'll take care of the rest.",
          this.codeMarkers.deploy,
        )}
        {this._renderUsageItem(
          "Step Three",
          "Infer",
          "Your model is quickly optimized and deployed to servers around the world to give you instant access to high-speed inference.",
          this.codeMarkers.infer,
        )}
      </aside>
    );
  }

  private _renderUsageItem(
    step: string,
    title: string,
    content: string,
    codeMarker: React.Ref<HTMLDivElement>,
  ) {
    return (
      <div className="p-12 shadow-sm bg-gray-50 rounded-3xl" ref={codeMarker}>
        <h2 className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
          {step}
        </h2>
        <h1 className="mt-2 text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl">
          {title}
        </h1>
        <p className="mt-4 text-base text-gray-500 sm:text-lg lg:mx-auto">
          {content}
        </p>
        <Link href="/get-started">
          <a>
            <p className="mt-4 text-base text-blue-600 opacity-75 hover:opacity-100">
              Get started for free
              <svg
                className="inline w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </p>
          </a>
        </Link>
      </div>
    );
  }
}
