export type JsonSchema = {
  type: string;
  properties?: Record<string, JsonSchema>;
  required?: string[];
  items?: JsonSchema;
  nullable?: boolean;
};

export const generateSchema = (schemaDefinition: JsonSchema): JsonSchema => {
  return schemaDefinition;
};

export const validate = (schema: JsonSchema, jsonObject: any): boolean => {
 if (jsonObject === null && schema.nullable) {
    return true;
  }

  if (!validateType(schema.type, jsonObject)) {
    return false;
  }

  if (schema.properties) {
    for (const propName in schema.properties) {
      const propSchema = schema.properties[propName];
      if (jsonObject[propName] !== undefined && !validate(propSchema, jsonObject[propName])) {
        return false;
      }
    }
  }

  if (schema.required) {
    for (const propName of schema.required) {
      if (jsonObject[propName] === undefined) {
        return false;
      }
    }
  }

  if (schema.items && Array.isArray(jsonObject)) {
    for (const item of jsonObject) {
      if (!validate(schema.items, item)) {
        return false;
      }
    }
  }

  return true;
};

const validateType = (expectedType: string, value: any): boolean => {
  if (expectedType === "string") {
    return typeof value === "string";
  } else if (expectedType === "number") {
    return typeof value === "number";
  } else if (expectedType === "array") {
    return Array.isArray(value);
  } else if (expectedType === "object") {
    return typeof value === "object" && !Array.isArray(value) && value !== null;
  } else {
    // Add more type validations as needed
    return false;
  }
};