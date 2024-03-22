import Button from "@/components/button";
import Form from "@/components/form";
import ListBox from "@/components/listbox";
import Spinner from "@/components/spinner";
import Textarea from "@/components/textarea";
import { FormEvent, useState } from "react";

export default function Interview({
  isRequesting = false,
  onSubmit,
  scpCatalog = [{ value: null, label: "Select SCP Id..." }],
}: {
  isRequesting: boolean;
  scpCatalog?: Array<any>;
  onSubmit?: (event: object) => void;
}) {
  const [scpId, setScpId] = useState(null);
  const [interview, setInterview] = useState("");

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (onSubmit) {
      const result: any = onSubmit({
        interview,
        scp_id: scpId,
      });

      if (result) {
        setInterview("");
        setScpId(null);
      }
    }
  };

  const handleOnChangeInterview = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInterview(e.target.value);
  };

  const handleOnChangeSCPCatalog = (data: any) => {
    setScpId(data.value)
  }

  return (
    <Form onSubmit={(event) => handleOnSubmit(event)} className="flex flex-col">
      <h2 className="my-5 text-2xl font-bold">Interviews</h2>
      <div className="flex flex-col w-full">
        <label>SCP ID</label>
        <ListBox data={scpCatalog} onChange={(data: object) => handleOnChangeSCPCatalog(data)} />
        <label className="mt-4 block" htmlFor="interview">
          Interview
        </label>
        <Textarea
          id="interview"
          className="mb-4"
          placeholder="Interview..."
          value={interview}
          onChange={(data: React.ChangeEvent<HTMLInputElement>) =>
            handleOnChangeInterview(data)
          }
        />
      </div>

      <div>
        {!isRequesting ? <Button kind="primary" className="w-2/12 py-2">
          Save
        </Button> : <Spinner className="ml-10"/>}
      </div>
    </Form>
  );
}
