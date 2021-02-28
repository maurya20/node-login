import React from "react";
import Button from "@material-ui/core/Button";
import { RootStateOrAny, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { formSubmit } from "../redux/actions";
import { useState } from "react";

interface Props {}

export const Home = (props: Props) => {
  const formData = useSelector((state: RootStateOrAny) => state.formData);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(formSubmit(input));
  };
  return (
    <div>
      <br></br>
      <h1>{formData.formData}</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Name"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          variant="contained"
          type="submit"
          className="btn btn-primary btn-lg "
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
