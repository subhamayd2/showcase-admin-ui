import React, { Component } from 'react';
import { Modal, Tooltip, Icon, Typography, Input } from 'antd';
import NumericInput from '../molecules/numericInput';
import { Row, Col } from 'react-flexbox-grid';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import withStyles, { useStyles } from '../utils/withStyles';
import DateField from '../molecules/dateField';

const { Text } = Typography;

class AddItem extends Component {
  state = {
    description: EditorState.createEmpty()
  };

  onDescriptionChange = description => {
    this.setState({
      description
    });
    console.log(draftToHtml(convertToRaw(description.getCurrentContent())));
  };

  renderModal = () => {
    return <Modal />;
  };

  render() {
    const {
      classes: { wrapper, rowGutter, descriptionEditor }
    } = this.props;
    const { description } = this.state;

    return (
      <div className={wrapper}>
        <Row middle="xs" className={rowGutter}>
          <Col xs={12} sm={2}>
            <Text>
              Item Name&nbsp;
              <Tooltip title="The complete item's name">
                <Icon type="question-circle-o" />
              </Tooltip>
            </Text>
          </Col>
          <Col xs={12} sm={6}>
            <Input />
          </Col>
        </Row>
        <Row middle="xs" className={rowGutter}>
          <Col xs={12} sm={2}>
            <Text>
              Item Price&nbsp;
              <Tooltip title="The item's price">
                <Icon type="question-circle-o" />
              </Tooltip>
            </Text>
          </Col>
          <Col xs={12} sm={6}>
            <Row>
              <Col xs={3}>
                <Input placeholder="Currency" />
              </Col>
              <Col xs={9}>
                <Input />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row middle="xs" className={rowGutter}>
          <Col xs={12} sm={2}>
            <Text>
              Item Description&nbsp;
              <Tooltip title="The smaller the better. Larger texts would take up a lot of space.">
                <Icon type="question-circle-o" />
              </Tooltip>
            </Text>
          </Col>
          <Col xs={12} sm={6}>
            <Editor
              editorState={description}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName={descriptionEditor}
              onEditorStateChange={this.onDescriptionChange}
            />
          </Col>
        </Row>
        <Row middle="xs" className={rowGutter}>
          <Col xs={12} sm={2}>
            <Text>
              Item Quantity&nbsp;
              <Tooltip title="Quantity of items available in stock">
                <Icon type="question-circle-o" />
              </Tooltip>
            </Text>
          </Col>
          <Col xs={12} sm={6}>
            <NumericInput />
          </Col>
        </Row>
        <Row middle="xs" className={rowGutter}>
          <Col xs={12} sm={2}>
            <Text>
              Item Date&nbsp;
              <Tooltip title="The date when this item was added to stock">
                <Icon type="question-circle-o" />
              </Tooltip>
            </Text>
          </Col>
          <Col xs={12} sm={6}>
            <DateField />
          </Col>
        </Row>
        <Row middle="xs" className={rowGutter}>
          <Col xs={12} sm={2}>
            <Text>
              Item Date&nbsp;
              <Tooltip title="The date when this item was added to stock">
                <Icon type="question-circle-o" />
              </Tooltip>
            </Text>
          </Col>
          <Col xs={12} sm={6}>
            <DateField />
          </Col>
        </Row>
      </div>
    );
  }
}

const styles = useStyles({
  wrapper: {
    padding: 50
  },
  rowGutter: {
    marginBottom: 10
  },
  descriptionEditor: {
    background: 'white',
    maxHeight: 300,
    minHeight: 150
  },
  '@media only screen and (max-width: 768px)': {
    wrapper: {
      padding: 0
    }
  }
});

export default withStyles(styles)(AddItem);
