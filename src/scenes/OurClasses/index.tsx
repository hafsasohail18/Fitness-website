import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from './Class';

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Our Weight Training Classes are tailored to help you build strength, sculpt your physique, and achieve your fitness goals.",
        image: image1,
    },
    {
        name: "Yoga Classes",
        description: "Our Yoga Classes offer a serene sanctuary where you can harmonize your mind, body, and spirit.",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description: "Our Ab Core Classes are designed to help you sculpt strong and defined abdominal muscles while enhancing core stability. Whether you want to build a six-pack or strengthen your core for improved posture and functional fitness, these classes are tailored to meet your goals.",
        image: image3,
    },
    {
        name: "Adventure Classes",
        description: "Our Adventure Classes take fitness to the great outdoors, offering exhilarating experiences that combine physical activity with the thrill of adventure. ",
        image: image4,
    },
    {
        name: "Fitness Classes",
        description: "Our Fitness Classes are the cornerstone of our wellness community, catering to individuals of all fitness levels and interests. Led by certified trainers, these classes provide a structured and motivating environment to help you reach your health and fitness goals.",
        image: image5,
    },
    {
        name: "Training Classes",
        description: "Our Training Classes are a dynamic and structured approach to help you achieve your fitness goals. Led by expert trainers, these classes provide personalized guidance, motivation, and a supportive environment, ensuring that you get the most out of your workout.",
        image: image6,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
            <motion.div className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
                <div className="md:w-3/5">
                    <HText>OUR CLASSES</HText>
                    <p className="py-5">Our classes are designed to cater to a wide range of fitness interests and abilities. 
                    Whether you're a seasoned athlete or just starting your fitness journey, 
                    you'll find something that suits your needs in our diverse class offerings.
                    From high-intensity interval training (HIIT) sessions that boost your cardiovascular fitness to relaxing yoga 
                    classes that promote flexibility and mindfulness, we have it all. Our experienced instructors create a supportive 
                    and motivating atmosphere where you can challenge yourself, meet your goals, and have fun while doing it.</p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) => (
                        <Class
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        />
                    ))}
                </ul>

            </div>
        </motion.div>

    </section>
    
  )
}

export default OurClasses;