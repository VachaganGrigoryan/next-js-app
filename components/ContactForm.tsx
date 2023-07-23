'use client';

import { Button, Form, Input, InputNumber, Select } from "antd";

const ConatctForm = () => {

    const servicesItems = ["Mobile development", "UI/UX Design", "web development", "SEO"]

    return (
        <Form
            layout="vertical"
            // onSubmit={(e) => e.preventDefault()}
            onSubmitCapture={(e) => e.preventDefault()}
            className="space-y-5 mt-12 lg:pb-12"
        >
            <Form.Item label='Full name'>
                <Input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
            </Form.Item>
            <Form.Item label='Email'>
                <Input
                    type="email"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
            </Form.Item>
            <Form.Item label='Phone number'>
                <div className="relative mt-2">
                <InputNumber
                    className="w-full pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    placeholder="+1 (555) 000-000"
                    required
                    addonBefore={
                        <Select
                            className="text-sm bg-transparent outline-none rounded-lg h-full"
                            defaultValue='+374'
                            options={[
                                { label: 'AM', value: '+374' },
                                { label: 'HY', value: '+374' }
                            ]}
                        />
                    }
                    />
                </div>
            </Form.Item>
            <div>
                <label className="font-medium">
                    Services
                </label>
                <ul className="grid gap-y-2 gap-x-6 flex-wrap grid-cols-2 mt-3">
                    {
                        servicesItems.map((item, idx) => (
                            <li key={idx} className="flex gap-x-3 text-sm">
                                <div>
                                    <input id={`service-${idx}`} type="checkbox" className="checkbox-item peer hidden" />
                                    <label
                                        htmlFor={`service-${idx}`}
                                        className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                                    >
                                    </label>
                                </div>
                                <label htmlFor={`service-${idx}`} className="cursor-pointer">{item}</label>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <Form.Item label='Message'>
                <Input.TextArea rows={5} autoSize={{ minRows: 5, maxRows: 5 }} required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></Input.TextArea>
            </Form.Item>

            <Form.Item >

                <Button
                    className="w-full text-white font-medium bg-orange-500 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                    type="primary"
                >
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
};

export default ConatctForm;