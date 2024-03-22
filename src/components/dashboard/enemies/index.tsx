import Form from "@/components/form";
import Input from "@/components/input";
import Button from "@/components/button";
import { FormEvent, useEffect, useRef, useState } from "react";
import Textarea from "@/components/textarea";
import ListBox from "@/components/listbox";
import Spinner from "@/components/spinner";

export default function Enemies({
  scpCatalog = [{ value: null, label: "Select SCP Id..." }],
  onSubmit,
  isRequesting = false,
}: {
  isRequesting?: boolean;
  scpCatalog?: Array<any>;
  onSubmit?: (event: object) => void;
}) {
  const [submitType, setSubmitType] = useState("");
  const [scpId, setScpId] = useState(null);
  const [scpEnemyId, setScpEnemyId] = useState(null);

  const handleOnChangeSCP = (data: any) => {
    setScpId(data.value);
  };

  const handleOnChangeSCPEnemy = (data: any) => {
    setScpEnemyId(data.value);
  };

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (onSubmit) onSubmit({ scpId, scpEnemyId, submitType });
  };

  return (
    <Form onSubmit={(event) => handleOnSubmit(event)} className="flex flex-col">
      <h2 className="my-5 text-2xl font-bold">Enemies</h2>
      <div className="flex flex-col w-full">
        <label>SCP</label>
        <ListBox
          data={scpCatalog}
          onChange={(data: object) => handleOnChangeSCP(data)}
        />
        <label className="mt-4">Enemy</label>
        <ListBox
          data={scpCatalog}
          onChange={(data: object) => handleOnChangeSCPEnemy(data)}
        />
      </div>
      <div>
        {!isRequesting ? (
          <>
            <Button
              kind="secondary"
              className="w-2/12 py-2 mt-4 mr-4"
              onClick={() => setSubmitType("detach")}
            >
              Detach
            </Button>
            <Button
              kind="primary"
              className="w-2/12 py-2 mt-4"
              onClick={() => setSubmitType("attach")}
            >
              Attach
            </Button>
          </>
        ) : (
          <Spinner className="ml-16 mt-5" />
        )}
      </div>
    </Form>
  );
}
