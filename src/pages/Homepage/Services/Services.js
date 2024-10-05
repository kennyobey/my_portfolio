import React from 'react'
import SectionTitle from '../../../components/Typography/SectionTitle'
import { HiOutlineDatabase } from 'react-icons/hi'
import { FiCode, FiUploadCloud } from 'react-icons/fi'
import SectionHead from '../../../components/Typography/SectionHead'

const Services = () => {
    const services = [
        {
            "id": 1,
            "service": "Mobile Development",
            "details": "I specialize in mobile development using the Flutter framework, creating cross-platform applications for both Android and iOS. I am proficient in designing and building intuitive, user-friendly mobile interfaces while integrating features through REST and GraphQL APIs. With a solid foundation in Flutter and Dart, I write clean and efficient code, leveraging my knowledge of data structures, algorithms, and system design to ensure high performance and scalability in my applications."
        },
        {
            "id": 2,
            "service": "Database Management",
            "details": "Having worked on over 7 projects using both NoSQL and SQL databases and coupled with my knowledge of database management, I'm confident about my capacity to manage databases efficiently and work with ORM and ODM for databases."
        },
        {
            "id": 3,
            "service": "Firebase",
            "details": "I have expertise in working with Firebase to build robust, real-time mobile applications. I can effectively integrate Firebase services, such as Firestore, Firebase Authentication, and Cloud Functions, into Flutter applications to enhance functionality and user experience. My ability to design and implement scalable backend systems using Firebase ensures seamless data synchronization and user authentication. I write clean and efficient code, leveraging my understanding of data structures, algorithms, and system design to deliver performant, real-time applications."
        },
    ]
    const props = { img: "https://cdn.lordicon.com/ofwpzftr.json", text: "Services" }
    return (
        <section id="services" className='mb-32'>
            <SectionTitle props={props} />
            <SectionHead>
                My <span className='text-primary'>Specializations</span>
            </SectionHead>
            <div className='services'>
                {
                    services.map(({ service, details }, index) => <div key={index}
                        className='hover:text-primary hover:border-primary border-[1px] border-accent p-6 rounded-2xl'
                        data-aos="fade-up"
                        data-aos-delay={`${((index) % 6) * 100 + 100}`}
                    >
                        {index === 0 && <FiCode className='text-[40px]' />
                        }

                        {index === 1 && <HiOutlineDatabase className='text-[40px]' />}
                        {index === 2 && <FiUploadCloud className='text-[40px]' />}
                        <div>
                            <h2 className='lg:text-2xl md:text-2xl text-xl mt-3 lg:font-normal md:font-normal font-bold'>{service}</h2>
                            <p className='text-accent mt-3 text-sm'>{details}</p>
                        </div>
                    </div>
                    )
                }
            </div>
        </section>
    )
}

export default Services