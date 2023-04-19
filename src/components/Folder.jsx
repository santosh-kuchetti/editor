import React, { useEffect, useState } from "react";
import "../Styles.css";
import { DeleteOutlined } from "@ant-design/icons";
import { message, Select, Switch } from "antd";
const Folder = ({ explorer, handleInsertNode }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  const [add, setAdd] = useState(false);
  const [name, setName] = useState(3);

  const handlePropagation = (e) => {
    setAdd(true);
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder: name == 4 ? true : false,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode == 13 && e.target.value) {
      console.log("clear", name);
      handleInsertNode(
        explorer.id,
        e.target.value,
        showInput.isFolder,
        name,
        false
      );
      setShowInput({ ...showInput, visible: false });
    }
  };

  const handleChange = async (value) => {
    if (add) {
      setExpand(true);
      await setName(value.value);
    } else {
      setExpand(true);
      let doom = value.value == 4 ? true : false;
      await setName(value.value);
      handleInsertNode(explorer.id, explorer.name, doom, value.value, true);
    }
  };

  useEffect(() => {
    console.log("tripleBoom", name);
  }, [name]);

  if (explorer.isFolder) {
    return (
      <div style={{ margin: "5px" }}>
        <div onClick={() => setExpand(!expand)} className="folder">
          <input
            type={
              name == 1
                ? "boolean"
                : name == 2
                ? ""
                : name == 3
                ? "text"
                : "object"
            }
            placeholder="AddName"
            onKeyDown={(e) => onAddFolder(e)}
            style={{ border: "none" }}
            value={explorer.name}
            onChange={(e) => {
              handleInsertNode(
                explorer.id,
                e.target.value,
                showInput.isFolder,
                name,
                true
              );
            }}
          />
          <div>
            <Select
              labelInValue
              defaultValue={{ value: "4", label: "Object" }}
              style={{ width: 120 }}
              onChange={handleChange}
              onClick={(e) => e.stopPropagation()}
              options={[
                {
                  value: 1,
                  label: "Boolean",
                },
                {
                  value: 2,
                  label: "Integer",
                },
                {
                  value: 3,
                  label: "String",
                },
                {
                  value: 4,
                  label: "Object",
                },
              ]}
            />
          </div>
          <div>
            <Switch
              checkedChildren="Required"
              unCheckedChildren="Not required"
              defaultChecked
              
            />
            <button
              style={{
                marginRight: "5px",
                backgroundColor: "rgb(151, 146, 146)",
              }}
              onClick={(e) => handlePropagation(e)}
            >
              {" "}
              +
            </button>
            <button
              style={{ backgroundColor: "rgb(151, 146, 146)" }}
              onClick={(e) => handlePropagation(e)}
            >
              <DeleteOutlined />
            </button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div style={{ margin: "5px" }} className="folder">
              <input
                type={
                  name == 1
                    ? "boolean"
                    : name == 2
                    ? ""
                    : name == 3
                    ? "text"
                    : "object"
                }
                placeholder="AddName"
                onKeyDown={(e) => onAddFolder(e)}
                style={{ border: "none" }}
              />
              <div>
                <Select
                  labelInValue
                  defaultValue={3}
                  style={{ width: 120 }}
                  onChange={handleChange}
                  onClick={(e) => e.stopPropagation()}
                  options={[
                    {
                      value: 1,
                      label: "Boolean",
                    },
                    {
                      value: 2,
                      label: "Integer",
                    },
                    {
                      value: 3,
                      label: "String",
                    },
                    {
                      value: 4,
                      label: "Object",
                    },
                  ]}
                />
              </div>
              <Switch
                checkedChildren="Required"
                unCheckedChildren="Not required"
                defaultChecked
              />
            </div>
          )}
          {explorer.items.map((item) => (
            <Folder
              handleInsertNode={handleInsertNode}
              explorer={item}
              key={item.id}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ margin: "5px" }} className="folder">
        <input
          type={
            name == 1
              ? "boolean"
              : name == 2
              ? ""
              : name == 3
              ? "text"
              : "object"
          }
          placeholder="AddName"
          onKeyDown={(e) => onAddFolder(e)}
          style={{ border: "none" }}
          value={explorer.name}
          onChange={(e) => {
            handleInsertNode(
              explorer.id,
              e.target.value,
              showInput.isFolder,
              name,
              true
            );
          }}
        />
        <div>
          <Select
            labelInValue
            defaultValue={explorer.key}
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              {
                value: 1,
                label: "Boolean",
              },
              {
                value: 2,
                label: "Integer",
              },
              {
                value: 3,
                label: "String",
              },
              {
                value: 4,
                label: "Object",
              },
            ]}
          />
        </div>
        <div>
          <Switch
            checkedChildren="Required"
            unCheckedChildren="Not required"
            defaultChecked
          />
          <button
            style={{ backgroundColor: "rgb(151, 146, 146)" }}
            onClick={(e) => handlePropagation(e)}
          >
            <DeleteOutlined />
          </button>
        </div>
      </div>
    );
  }
};

export default Folder;
