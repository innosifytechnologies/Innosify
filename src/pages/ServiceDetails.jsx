import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCheckCircle, FaRocket, FaCode, FaCloud, FaShieldAlt, FaMicrochip, FaChartLine, FaNetworkWired, FaRobot, FaCog, FaSatellite } from "react-icons/fa";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";

const serviceData = {
    "custom-software-development": {
        title: "Custom Software Development",
        icon: FaCode,
        description: "Tailored solutions built with cutting-edge technologies to solve your unique business challenges.",
        longDescription: "We don't just write code; we engineer success. Our custom software development services are designed to address your specific business needs, whether you need a complex enterprise platform, a sleek consumer app, or a high-performance internal tool. We use a tech-agnostic approach to select the best tools for the job.",
        features: [
            "Scalable Architecture Design",
            "Full-Stack Development (React, Node, Python)",
            "Legacy System Modernization",
            "API Development & Integration",
            "Enterprise Resource Planning (ERP)",
            "Cloud-Native Applications"
        ],
        process: [
            { step: "01", title: "Discovery", desc: "We dive deep into your requirements and business goals." },
            { step: "02", title: "Architecture", desc: "Designing a robust, scalable technical foundation." },
            { step: "03", title: "Development", desc: "Agile sprints with regular demos and feedback loops." },
            { step: "04", title: "Deployment", desc: "Seamless launch with CI/CD pipelines and monitoring." }
        ],
        gradient: "from-blue-500 to-cyan-400"
    },
    "cloud-solutions": {
        title: "Cloud Solutions",
        icon: FaCloud,
        description: "Scalable cloud infrastructure and migration services to power your digital transformation.",
        longDescription: "Unlocking the full potential of the cloud. We help businesses migrate, optimize, and manage their cloud infrastructure on AWS, Azure, and Google Cloud. From serverless architectures to container orchestration with Kubernetes, we ensure your infrastructure is resilient, secure, and cost-effective.",
        features: [
            "Cloud Migration Strategy",
            "Serverless Architecture",
            "DevOps & CI/CD Automation",
            "Cost Optimization",
            "Disaster Recovery Planning",
            "Multi-Cloud Management"
        ],
        process: [
            { step: "01", title: "Assessment", desc: "Analyzing current infrastructure and readiness." },
            { step: "02", title: "Strategy", desc: "Defining the migration path and target architecture." },
            { step: "03", title: "Migration", desc: "Securely moving data and applications with minimal downtime." },
            { step: "04", title: "Optimization", desc: "Continuous tuning for performance and cost." }
        ],
        gradient: "from-purple-500 to-pink-400"
    },
    "cybersecurity": {
        title: "Cybersecurity",
        icon: FaShieldAlt,
        description: "Enterprise-grade security solutions to protect your data and digital assets.",
        longDescription: "In an era of evolving threats, security cannot be an afterthought. Our cybersecurity services provide end-to-end protection for your digital ecosystem. We conduct rigorous audits, implement zero-trust architectures, and provide 24/7 monitoring to safeguard your sensitive data and reputation.",
        features: [
            "Vulnerability Assessments",
            "Penetration Testing",
            "Identity & Access Management (IAM)",
            "Zero Trust Architecture",
            "Compliance (GDPR, HIPAA, SOC2)",
            "Incident Response Planning"
        ],
        process: [
            { step: "01", title: "Audit", desc: "Comprehensive security posture analysis." },
            { step: "02", title: "Harden", desc: "Implementing critical security controls and patches." },
            { step: "03", title: "Monitor", desc: "Real-time threat detection and response." },
            { step: "04", title: "Train", desc: "Empowering your team with security awareness." }
        ],
        gradient: "from-green-500 to-emerald-400"
    },
    "digital-transformation": {
        title: "Digital Transformation",
        icon: FaRocket,
        description: "End-to-end digital strategies to accelerate your business growth and innovation.",
        longDescription: "Reimagine your business for the digital age. We partner with you to digitize operations, enhance customer experiences, and create new revenue streams. Our holistic approach combines strategy, technology, and change management to drive meaningful, lasting impact.",
        features: [
            "Digital Strategy Consulting",
            "Workflow Automation",
            "Customer Experience (CX) Design",
            "Legacy Modernization",
            "Data-Driven Decision Making",
            "Agile Organization Coaching"
        ],
        process: [
            { step: "01", title: "Vision", desc: "Defining the digital future of your organization." },
            { step: "02", title: "Roadmap", desc: "Creating a step-by-step plan for transformation." },
            { step: "03", title: "Execution", desc: "Implementing technology and process changes." },
            { step: "04", title: "Adoption", desc: "Ensuring your team embraces the new digital tools." }
        ],
        gradient: "from-orange-500 to-yellow-400"
    },
    "iot-automation": {
        title: "IoT & Automation",
        icon: FaMicrochip,
        description: "Smart connected solutions and industrial automation for the modern enterprise.",
        longDescription: "Bridging the physical and digital worlds. We build robust IoT solutions that connect devices, sensors, and machines to gather real-time data and automate complex processes. From smart factories to connected consumer devices, we engineer the future of automation.",
        features: [
            "IoT Device Firmware",
            "Edge Computing Solutions",
            "Industrial Automation (IIoT)",
            "Smart Home/City Applications",
            "Hardware-Software Integration",
            "Real-time Data Processing"
        ],
        process: [
            { step: "01", title: "Prototype", desc: "Rapid proof-of-concept development." },
            { step: "02", title: "Hardware", desc: "Selecting and integrating the right sensors and chips." },
            { step: "03", title: "Connectivity", desc: "Establishing secure, reliable data transmission." },
            { step: "04", title: "Scale", desc: "Deploying and managing device fleets." }
        ],
        gradient: "from-cyan-500 to-blue-400"
    },
    "data-analytics": {
        title: "Data Analytics",
        icon: FaChartLine,
        description: "Transform raw data into actionable insights with advanced analytics and AI.",
        longDescription: "Data is your most valuable asset. We help you harvest, clean, and visualize data to uncover hidden trends & opportunities. Leveraging machine learning and AI, we build predictive models that give you a competitive edge in the market.",
        features: [
            "Big Data Infrastructure",
            "Business Intelligence Dashboards",
            "Machine Learning Models",
            "Data Warehousing & Lakes",
            "Predictive Analytics",
            "AI-Driven Automation"
        ],
        process: [
            { step: "01", title: "Ingest", desc: "Setting up data pipelines from multiple sources." },
            { step: "02", title: "Process", desc: "Cleaning and structuring data for analysis." },
            { step: "03", title: "Analyze", desc: "Applying statistical models and AI algorithms." },
            { step: "04", title: "Visualize", desc: "Creating intuitive dashboards for stakeholders." }
        ],
        gradient: "from-pink-500 to-rose-400"
    },
    "iot-instrumentation": {
        title: "IoT Instrumentation",
        icon: FaNetworkWired,
        description: "Advanced sensor networks and data acquisition systems for intelligent real-time monitoring.",
        longDescription: "Transform your physical infrastructure with intelligent IoT instrumentation. We design and deploy comprehensive sensor networks, data acquisition systems, and edge computing solutions that capture, transmit, and process real-time data from any environment. From industrial monitoring to environmental sensing, our IoT instrumentation solutions provide the visibility and control you need.",
        features: [
            "Sensor Network Design & Deployment",
            "Data Acquisition Systems (DAQ)",
            "Edge Computing & Processing",
            "Real-time Monitoring Dashboards",
            "Wireless Protocol Integration",
            "Industrial Sensor Calibration"
        ],
        process: [
            { step: "01", title: "Survey", desc: "Analyzing your environment and measurement requirements." },
            { step: "02", title: "Design", desc: "Architecting sensor networks and data flow systems." },
            { step: "03", title: "Deploy", desc: "Installing and calibrating instrumentation hardware." },
            { step: "04", title: "Integrate", desc: "Connecting to analytics platforms and control systems." }
        ],
        gradient: "from-emerald-500 to-teal-400"
    },
    "ai-instrumentation": {
        title: "AI Instrumentation",
        icon: FaRobot,
        description: "Intelligent measurement systems powered by machine learning for predictive analytics and smart decision making.",
        longDescription: "Elevate your instrumentation with artificial intelligence. Our AI instrumentation solutions integrate machine learning models directly into your measurement and monitoring systems. From predictive maintenance to anomaly detection, we embed intelligent algorithms that learn from your data to deliver actionable insights and autonomous decision-making capabilities.",
        features: [
            "Predictive Analytics Integration",
            "Anomaly Detection Algorithms",
            "Computer Vision Systems",
            "Natural Language Processing",
            "AI Model Deployment at Edge",
            "Continuous Learning Pipelines"
        ],
        process: [
            { step: "01", title: "Data Audit", desc: "Assessing data quality and model opportunities." },
            { step: "02", title: "Model Dev", desc: "Training and validating AI/ML models." },
            { step: "03", title: "Embed", desc: "Integrating models into instrumentation systems." },
            { step: "04", title: "Refine", desc: "Continuous monitoring and model improvement." }
        ],
        gradient: "from-violet-500 to-purple-400"
    },
    "automation-instrumentation": {
        title: "Automation Instrumentation",
        icon: FaCog,
        description: "Industrial-grade automation and control systems for precise process management and optimization.",
        longDescription: "Master your processes with precision automation instrumentation. We specialize in designing and implementing SCADA systems, PLCs, DCS platforms, and custom control systems that bring automation to your manufacturing, processing, and operational workflows. Our solutions ensure accuracy, repeatability, and efficiency at every stage of your production cycle.",
        features: [
            "SCADA System Implementation",
            "PLC Programming & Integration",
            "DCS Architecture Design",
            "Process Control Optimization",
            "HMI Development & Design",
            "Industrial Protocol Integration"
        ],
        process: [
            { step: "01", title: "Scope", desc: "Mapping processes and control requirements." },
            { step: "02", title: "Engineer", desc: "Designing control logic and system architecture." },
            { step: "03", title: "Implement", desc: "Programming, wiring, and commissioning systems." },
            { step: "04", title: "Optimize", desc: "Tuning loops and optimizing performance." }
        ],
        gradient: "from-amber-500 to-orange-400"
    },
    "robotics-instrumentation": {
        title: "Robotics Instrumentation",
        icon: FaSatellite,
        description: "Precision sensing and control systems for robotic applications and autonomous machinery.",
        longDescription: "Power your robotics with precision instrumentation. We develop sophisticated sensing, feedback, and control systems for robotic platforms. From motion control and positioning systems to force/torque sensing and vision integration, our robotics instrumentation solutions enable precise, repeatable, and intelligent machine behavior for manufacturing, logistics, and beyond.",
        features: [
            "Motion Control Systems",
            "Position & Navigation Sensing",
            "Force/Torque Measurement",
            "Vision System Integration",
            "Actuator Control & Feedback",
            "Safety System Implementation"
        ],
        process: [
            { step: "01", title: "Specify", desc: "Defining motion and sensing requirements." },
            { step: "02", title: "Select", desc: "Choosing optimal sensors and actuators." },
            { step: "03", title: "Integrate", desc: "Building control loops and feedback systems." },
            { step: "04", title: "Validate", desc: "Testing and certifying performance." }
        ],
        gradient: "from-red-500 to-pink-400"
    }
};

const ServiceDetails = () => {
    const { id } = useParams();
    const service = serviceData[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Service Not Found</h2>
                    <Link to="/" className="text-blue-400 hover:text-blue-300">Return Home</Link>
                </div>
            </div>
        );
    }

    const Icon = service.icon;

    return (
        <div className="bg-[#0a0a0f] min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-20 px-6 overflow-hidden">
                {/* Background Effects */}
                <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-[120px]`} />

                <div className="max-w-7xl mx-auto relative z-10">
                    <Link to="/#services" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                        <FaArrowLeft /> Back to Services
                    </Link>

                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex-1"
                        >
                            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10 mb-6`}>
                                <Icon className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                {service.title}
                            </h1>
                            <p className="text-xl text-gray-400 leading-relaxed mb-8">
                                {service.longDescription}
                            </p>
                            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className={`px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r ${service.gradient} hover:opacity-90 transition-opacity`}>
                                Get Started
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex-1"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {service.features.map((feature, index) => (
                                    <div key={index} className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-3">
                                        <FaCheckCircle className={`w-5 h-5 flex-shrink-0 text-${service.gradient.split('-')[1]}-400 mt-1`} />
                                        <span className="text-gray-300 text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 px-6 bg-black/20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Our Process</h2>
                        <div className={`w-20 h-1 bg-gradient-to-r ${service.gradient} mx-auto rounded-full`} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {service.process.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="text-6xl font-bold text-white/5 absolute -top-8 left-0 select-none">
                                    {step.step}
                                </div>
                                <div className="relative z-10 pt-8">
                                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-12 -right-4 w-8 h-[2px] bg-white/10" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CallToAction />
            <Footer />
        </div>
    );
};

export default ServiceDetails;
