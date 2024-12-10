import React, { useState, useEffect, useMemo } from "react";
import { Form, Input, Radio, Checkbox, Button } from "antd";
import { useForm } from "antd/es/form/Form";

const hobi = {
  man: ["游戏", "电影", "极限"],
  woman: ["阅读", "瑜伽", "旅行"],
};

export const userForm = () => {
  const [formRef] = useForm();
  const [result, setResult] = useState({ sex: "man" });

  const hobiOpts = useMemo(() => {
    setResult((s) => ({ ...s, hobi: undefined }));
    return hobi[result.sex];
  }, [result.sex]);

  return (
    <Form
      form={formRef}
      onValuesChange={(values) => {
        const newVal = { ...values };
        if (values.sex !== result.sex) {
          newVal.hobi = undefined;
        }
        setResult(newVal);
      }}
    >
      <Form.Item required label="姓名" name="name">
        <Input></Input>
      </Form.Item>
      <Form.Item required label="年龄" name="age">
        <Input.Number />
      </Form.Item>
      <Form.Item required label="性别" name="sex">
        <Radio.Group
          options={[
            { label: "男", value: "man" },
            { label: "女", value: "woman" },
          ]}
        ></Radio.Group>
      </Form.Item>
      <Form.Item required label="爱好" name="hobi">
        <Checkbox options={hobiOpts} />
      </Form.Item>
      <Form.Item required label="姓名" name="name">
        <Input></Input>
      </Form.Item>
      <Button
        onClick={() => {
          formRef.validateFields().then(() => {
            alert(`
                    姓名：${result.name}
                    年龄: ${result.age}
                    性别：${result.sex === "man" ? "男" : "女"}
                    爱好：${result.hobi}
                `);
          });
        }}
      >
        提交
      </Button>
    </Form>
  );
};
