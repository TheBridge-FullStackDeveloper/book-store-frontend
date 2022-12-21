import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Form, InputNumber, Select, Input } from "antd";
import { useEffect } from "react";
import { update } from "../../../features/books/booksSlice";

const EditModal = ({ visible, setVisible }) => {
  const { Option } = Select;
  const { genres } = useSelector((state) => state.genres);
  const { book } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const selectOption = genres.map((genre) => {
    return (
      <Option key={genre.id} value={genre.id}>
        {genre.name}
      </Option>
    );
  });
  const [form] = Form.useForm();

  useEffect(() => {
    const bookToEdit = {
      ...book,
      GenreId: book.Genres?.map((element) => element.id), //[1,2]
    };
    form.setFieldsValue(bookToEdit);
  }, [book]);
  const onFinish = (values) => {
    const bookWithId = { ...values, id: book.id };
    dispatch(update(bookWithId));
    // dispatch(update({ ...values, id: book.id }));
    setVisible(false); //cierra el modal
  };
  return (
    <Modal title="Edit Book" visible={visible} footer={[]}>
      <Form onFinish={onFinish} form={form}>
        <Form.Item label="Book Name" name="name">
          <Input placeholder="Book name" />
        </Form.Item>
        <Form.Item name="GenreId" label="Select Genres">
          <Select mode="multiple" placeholder="Please select genre">
            {selectOption}
          </Select>
        </Form.Item>
        <Form.Item label="Price">
          <Form.Item name="price" noStyle>
            <InputNumber />
          </Form.Item>
          <span className="ant-form-text"> €</span>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
