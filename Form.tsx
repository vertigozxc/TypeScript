import React, { Component } from 'react';

interface FormProps {
  onSubmit: (data: FormData) => void;
}

interface FormState {
  formData: FormData;
}

class Form extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      formData: new FormData()
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const { formData } = this.state;
    formData.set(name, value);
    this.setState({ formData });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSubmit(this.state.formData);
  };

  render() {
    const { formData } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.get('name') || ''} onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.get('email') || ''} onChange={this.handleChange} />
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.get('message') || ''} onChange={this.handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
