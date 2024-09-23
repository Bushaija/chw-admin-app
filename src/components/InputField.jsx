const InputField = ({fieldName, placeholder, type = 'text', value, onChange, name}) => {
    return (
        <section className="info flex flex-col gap-2">
          <span className="font-medium">{fieldName}</span>
          <input 
            type={type} 
            placeholder={placeholder} 
            value={value}
            onChange={onChange}
            name={name}
            className="w-[300px] py-[10px] px-[10px] rounded-md bg-[#d8d8da] placeholder:text-[#7E7F83]"/>
        </section>
    );
  }

export default InputField;