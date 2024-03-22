import Button from "@/components/button";
import Form from "@/components/form";
import Input from "@/components/input";
import Spinner from "@/components/spinner";
import Textarea from "@/components/textarea";
import { FormEvent, useRef, useState } from "react";

export default function Category({
  isRequesting = false,
  onSubmit,
}: {
  isRequesting?: boolean;
  onSubmit?: (event: object) => void;
}) {
  const name: any = useRef();
  const [description, setDescription] = useState("");

  const handleOnChangeDescription = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (onSubmit) {
      const result: any = onSubmit({
        ...(name.current !== undefined
          ? { name: name.current["value"] }
          : { name: null }),
        description,
      });

      if (result) {
        name.current["value"] = "";
        setDescription("");
      }
    }
  };

  return (
    <Form onSubmit={(event) => handleOnSubmit(event)} className="flex flex-col">
      <h2 className="my-5 text-2xl font-bold">Category</h2>
      <div className="flex flex-col w-full">
        <label htmlFor="category_name">Category Name</label>
        <Input
          id="category_name"
          className="w-full mb-4"
          required
          placeholder="Category Name..."
          inputRef={name}
        />
        <label className="block" htmlFor="category_description">
          Category Description
        </label>
        <Textarea
          id="category_description"
          className="mb-4"
          placeholder="Category Description..."
          value={description}
          onChange={(data: React.ChangeEvent<HTMLInputElement>) =>
            handleOnChangeDescription(data)
          }
        />
      </div>

      <div>
        {!isRequesting ? (
          <Button kind="primary" className="w-2/12 py-2">
            Save
          </Button>
        ) : (
          <Spinner className="ml-10" />
        )}
      </div>
    </Form>
  );
}
