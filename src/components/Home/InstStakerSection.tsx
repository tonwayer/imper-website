import { useFormik } from "formik"
import Button from "../Button";

import Card from "../Card"
import Input from "../Input"

const InstStakerSection = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return <section className="mt-[420px]">
    <Card className="mx-auto">
      <img src="/assets/coins.png" alt="coins" className="-mt-[150px] w-[415px] mx-auto" />
      <h4 className="font-spaceGrotesk text-2xl font-bold text-center mt-12 mb-5">
        Institutional staker?
      </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in vel vulputate vivamus turpis suspendisse vel. In quisque neque dolor morbi quam hac non.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div>
          <Input label="Name" name="name" error={false} value={formik.values.name} handleChange={formik.handleChange} />
        </div>
        <div>
          <Input label="Email address" name="email" error={false} value={formik.values.email} handleChange={formik.handleChange} />
        </div>
      </div>
      <Button className="w-full mt-6">
        Get special offer
      </Button>
    </Card>
  </section>
}

export default InstStakerSection
