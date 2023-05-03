import React, { Component } from 'react';

class EditForm extends Component {
  constructor(props) {
    super(props);
    const {
      item: { title, desc },
    } = this.props;
    this.state = {
      title,
      desc,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { onSaveEdit } = this.props;
    const { title, desc } = this.state;

    return (
      <div className="edit-form">
        <input
          onChange={this.handleChange}
          type="text"
          name="title"
          id="title"
          placeholder="Enter Todo Title"
          value={title}
        />
        <input
          onChange={this.handleChange}
          type="text"
          name="desc"
          id="desc"
          placeholder="Enter Todo Description"
          value={desc}
        />
        <button
          className="btn btn-edit"
          onClick={() => onSaveEdit({ title, desc })}
        >
          Save Edit
        </button>
      </div>
    );
  }
}

export default EditForm;
