import { NextPage } from "next";
import { useState } from "react";
import { CustomErrorBoundary } from "../../src/components/CustomErrorBoundary";

export const ComponentWithErrors = () => {
  const [trigger, setTrigger] = useState(false);

  const triggerError = () => {
    throw new Error("User initiated error.");
  };

  trigger && triggerError();

  return (
    <section>
      <h2>Component With Errors</h2>
      <button onClick={() => triggerError()}>Trigger Error</button>
      <button onClick={() => setTrigger(true)}>Trigger Error</button>
    </section>
  );
};

const ErrorBoundariesPage: NextPage = () => {
  return (
    <main>
      <CustomErrorBoundary>
        <ComponentWithErrors />
      </CustomErrorBoundary>
    </main>
  );
};

export default ErrorBoundariesPage;
