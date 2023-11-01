export const questions = [
  // First Section
  {
    text: "Protocol layering, packet switching, routing, and data streaming are the principles on which:",
    answers: [
      { text: "Computer Networks are based", correct: true },
      { text: "Hosts", correct: false },
      { text: "Latency", correct: false },
      { text: "Node", correct: false },
      { text: "Data transfer rate", correct: false },
    ],
  },
  {
    text: "The computers and other devices that use the network for communication purposes are referred to as:",
    answers: [
      { text: "Computer Networks are based", correct: false },
      { text: "Hosts", correct: true },
      { text: "Latency", correct: false },
      { text: "Node", correct: false },
      { text: "Data transfer rate", correct: false },
    ],
  },
  {
    text: "This is the delay that occurs after a send operation is executed before data starts to arrive at the destination computer in network performance:",
    answers: [
      { text: "Computer Networks are based", correct: false },
      { text: "Hosts", correct: false },
      { text: "Latency", correct: true },
      { text: "Node", correct: false },
      { text: "Data transfer rate", correct: false },
    ],
  },
  {
    text: "This term is used to refer to any computer or switching device attached to a network:",
    answers: [
      { text: "Computer Networks are based", correct: false },
      { text: "Hosts", correct: false },
      { text: "Latency", correct: false },
      { text: "Node", correct: true },
      { text: "Data transfer rate", correct: false },
    ],
  },
  {
    text: "This is the speed at which data can be transferred between two computers in the network once transmission has begun:",
    answers: [
      { text: "Computer Networks are based", correct: false },
      { text: "Hosts", correct: false },
      { text: "Latency", correct: false },
      { text: "Node", correct: false },
      { text: "Data transfer rate", correct: true },
    ],
  },
  {
    text: "This is a single communication subsystem providing communication between all of the hosts that are connected to it, where the internet is constructed from many subnets:",
    answers: [
      { text: "The Internet", correct: true },
      { text: "Hosts", correct: false },
      { text: "Latency", correct: false },
      { text: "Node", correct: false },
      { text: "Data transfer rate", correct: false },
    ],
  },
  {
    text: "They carry messages at lower speeds between nodes that are often in different organizations and may be separated by large distances:",
    answers: [
      { text: "Wide Area Networks (WAN)", correct: true },
      { text: "Hosts", correct: false },
      { text: "Latency", correct: false },
      { text: "Node", correct: false },
      { text: "Data transfer rate", correct: false },
    ],
  },
  {
    text: "The end-to-end communication must provide totally error-free; the detection of communication errors and their correction is what we call:",
    answers: [
      { text: "Reliability", correct: true },
      { text: "Hosts", correct: false },
      { text: "Latency", correct: false },
      { text: "Node", correct: false },
      { text: "Data transfer rate", correct: false },
    ],
  },
  {
    text: "This is a sequence of binary data (an array of bits or bytes) of restricted length, together with addressing information sufficient to identify the source and destination of computers:",
    answers: [
      { text: "The simplest form of packet", correct: true },
      { text: "Hosts", correct: false },
      { text: "Latency", correct: false },
      { text: "Node", correct: false },
      { text: "Data transfer rate", correct: false },
    ],
  },
  {
    text: "This is a unit of routing (delivering data from one part of the internet to another):",
    answers: [
      { text: "Subnet", correct: true },
      { text: "Hosts", correct: false },
      { text: "Latency", correct: false },
      { text: "Node", correct: false },
      { text: "Data transfer rate", correct: false },
    ],
  },
  {
    text: "This is a type of network based on the high-bandwidth copper and fiber optic cabling recently installed in some towns and cities for the transmission of video, voice, and other data over distances up to 50 kilometers:",
    answers: [
      { text: "Metropolitan Area Networks (MANs)", correct: true },
      { text: "Hosts", correct: false },
      { text: "Latency", correct: false },
      { text: "Node", correct: false },
      { text: "Data transfer rate", correct: false },
    ],
  },
  {
    text: "This is defined as the ability to meet deadlines when transmitting and processing streams of real-time multimedia data:",
    answers: [
      { text: "Quality of service", correct: true },
      { text: "Hosts", correct: false },
      { text: "Latency", correct: false },
      { text: "Node", correct: false },
      { text: "Data transfer rate", correct: false },
    ],
  },
  {
    text: "This is a communication subsystem in which several networks are linked together to provide common data communication facilities that overlay the technologies and protocols of the individual component networks and the methods used for the interconnection:",
    answers: [
      { text: "Internetworks", correct: true },
      { text: "Hosts", correct: false },
      { text: "Latency", correct: false },
      { text: "Node", correct: false },
      { text: "Data transfer rate", correct: false },
    ],
  },
  {
    text: "This is why many network technologies support the simultaneous transmission of messages to several recipients:",
    answers: [
      { text: "Multicasting", correct: true },
      { text: "Hosts", correct: false },
      { text: "Latency", correct: false },
      { text: "Node", correct: false },
      { text: "Data transfer rate", correct: false },
    ],
  },
  {
    text: "The IEEE 802.16 WiMAX standard is targeted at this class of network. It aims to provide an alternative to wired connections to home and office buildings:",
    answers: [
      {
        text: "Wireless Metropolitan Area Networks (WMANs)",
        correct: true,
      },
      { text: "Hosts", correct: false },
      { text: "Latency", correct: false },
      { text: "Node", correct: false },
      { text: "Data transfer rate", correct: false },
    ],
  },
  {
    text: "This is referred to as the transmission and display of audio and video in real time. It requires much higher bandwidths, than most other forms of communication in distributed systems",
    answers: [
      { text: "Streaming", correct: true },
      { text: "Hosts", correct: false },
      { text: "Latency", correct: false },
      { text: "Node", correct: false },
      { text: "Data transfer rate", correct: false },
    ],
  },
  // Second section
  {
    text: "They are composed of a number of personal devices such as mobile phones, tablets, digital cameras, music players and so on that are now carried by many people.",
    answers: [
      { text: "Wireless personal area networks (WPANs)", correct: true },
      { text: "Wireless wide area networks (WWANs)", correct: false },
      { text: "ATM Networks", correct: false },
      { text: "Broadcasting", correct: false },
    ],
  },
  {
    text: "They are generally used to hold the video frames, but because the flow is continuous as opposed to the intermittent traffic generated by typical client-server interactions and are handled somewhat differently.",
    answers: [
      { text: "UDP internet packets", correct: true },
      { text: "Wireless wide area networks (WWANs)", correct: false },
      { text: "ATM Networks", correct: false },
      { text: "Broadcasting", correct: false },
    ],
  },
  {
    text: "In this type of network, most mobile phone networks are based on digital wireless network technologies such as the GSM standard, which is used in most countries of the world.",
    answers: [
      { text: "Wireless wide area networks (WWANs)", correct: true },
      { text: "Wireless personal area networks (WPANs)", correct: false },
      { text: "ATM Networks", correct: false },
      { text: "UDP internet packets", correct: false },
    ],
  },
  {
    text: "They are specifically designed to provide high bandwidth and low latencies and to support quality of service by the reservation of network resources.",
    answers: [
      { text: "ATM Networks", correct: true },
      { text: "Wireless personal area networks (WPANs)", correct: false },
      { text: "Wireless wide area networks (WWANs)", correct: false },
      { text: "UDP internet packets", correct: false },
    ],
  },
  {
    text: "This is a transmission technique that involves no switching, everything is transmitted to every node, and it is up to potential receivers to notice transmissions addressed to them.",
    answers: [
      { text: "Broadcasting", correct: true },
      { text: "Wireless personal area networks (WPANs)", correct: false },
      { text: "Wireless wide area networks (WWANs)", correct: false },
      { text: "ATM Networks", correct: false },
    ],
  },
  {
    text: "In this type of switching, each packet arriving at a node is first stored in memory at the node and then processed by a program that transmits it on an outgoing circuit, which transfers the packet to another node that is closer to its ultimate destination.",
    answers: [
      { text: "Packet switching", correct: true },
      { text: "Wireless personal area networks (WPANs)", correct: false },
      { text: "Wireless wide area networks (WWANs)", correct: false },
      { text: "ATM Networks", correct: false },
    ],
  },
  {
    text: "Their operation was simple to understand, when a caller dialed a number, the pair of wires from her phone to the local exchange was connected by an automatic switch at the exchange to the pair of wires connected to the other party's phone.",
    answers: [
      { text: "Circuit switching", correct: true },
      { text: "Wireless personal area networks (WPANs)", correct: false },
      { text: "Wireless wide area networks (WWANs)", correct: false },
      { text: "ATM Networks", correct: false },
    ],
  },
  {
    text: "This is used to refer to a well-known set of rules and formats to be used for communication between processes in order to perform a given task.",
    answers: [
      { text: "The term protocol", correct: true },
      { text: "Wireless personal area networks (WPANs)", correct: false },
      { text: "Wireless wide area networks (WWANs)", correct: false },
      { text: "ATM Networks", correct: false },
    ],
  },
  {
    text: "The task of dividing messages into packets before transmission and reassembling them at the receiving computer is usually performed in the transport layer.",
    answers: [
      { text: "Packet assembly", correct: true },
      { text: "Wireless personal area networks (WPANs)", correct: false },
      { text: "Wireless wide area networks (WWANs)", correct: false },
      { text: "ATM Networks", correct: false },
    ],
  },
  {
    text: "They are software-defined destinations points at a host computer. They are attached to a processes, enabling data transmission to be addressed to a specific process at a destination node.",
    answers: [
      { text: "Ports", correct: true },
      { text: "Network address", correct: false },
      { text: "Tunneling", correct: false },
      { text: "Packet assembly", correct: false },
    ],
  },
  {
    text: "This is a numeric identifier that uniquely identifies a host computer and enables it to be located by nodes that are responsible for routing data to it.",
    answers: [
      { text: "A network address", correct: true },
      { text: "Ports", correct: false },
      { text: "Tunneling", correct: false },
      { text: "Packet assembly", correct: false },
    ],
  },
  {
    text: "When a pair of nodes connected to two separate networks need to communicate through another type of network or over an alien protocol, they can do so by constructing a protocol under a scheme of:",
    answers: [
      { text: "Tunneling", correct: true },
      { text: "Ports", correct: false },
      { text: "Network address", correct: false },
      { text: "Packet assembly", correct: false },
    ],
  },
  // Third section
  {
    text: "This is a function that is required in all networks except those LANs, such as the Ethernet, that provide direct connections between all pairs of attached hosts.",
    answers: [
      { text: "Routing", correct: true },
      { text: "Internetwork", correct: false },
      { text: "Addressing scheme", correct: false },
      { text: "Mobile IP", correct: false },
      { text: "A Firewall", correct: false },
    ],
  },
  {
    text: "A unified addressing scheme between different networks that enables packets to be addressed to any host connected to any subnet is a necessary element to build:",
    answers: [
      { text: "Internetwork", correct: true },
      { text: "Routing", correct: false },
      { text: "Addressing scheme", correct: false },
      { text: "Mobile IP", correct: false },
      { text: "A Firewall", correct: false },
    ],
  },
  {
    text: "This must lend itself to the development of a flexible and efficient routing scheme, but the addresses themselves cannot contain very much of the information needed to route a packet to its destination.",
    answers: [
      { text: "Addressing scheme", correct: true },
      { text: "Routing", correct: false },
      { text: "Internetwork", correct: false },
      { text: "Mobile IP", correct: false },
      { text: "A Firewall", correct: false },
    ],
  },
  {
    text: "It is based upon the permanent allocation of a normal IP address to each mobile host on a subnet in its home domain.",
    answers: [
      { text: "Mobile IP", correct: true },
      { text: "Routing", correct: false },
      { text: "Internetwork", correct: false },
      { text: "Addressing scheme", correct: false },
      { text: "A Firewall", correct: false },
    ],
  },
  {
    text: "The purpose of this is to monitor and control all communication into and out of an intranet.",
    answers: [
      { text: "A Firewall", correct: true },
      { text: "Routing", correct: false },
      { text: "Internetwork", correct: false },
      { text: "Addressing scheme", correct: false },
      { text: "Mobile IP", correct: false },
    ],
  },
  {
    text: "Message passing between a pair of processes can be supported by two message communication operations:",
    answers: [
      { text: "Send and receive operations", correct: true },
      { text: "Routing", correct: false },
      { text: "Internetwork", correct: false },
      { text: "Addressing scheme", correct: false },
      { text: "Mobile IP", correct: false },
    ],
  },
  {
    text: "In this form of communication, the use of the send operation is non-blocking, receive operation can have blocking and non-blocking variants:",
    answers: [
      { text: "The asynchronous form of communication", correct: true },
      { text: "Routing", correct: false },
      { text: "Internetwork", correct: false },
      { text: "Addressing scheme", correct: false },
      { text: "Mobile IP", correct: false },
    ],
  },
  {
    text: "We can describe this as the guaranteed to deliver the message despite a reasonable number of packets being dropped or lost:",
    answers: [
      { text: "Reliability", correct: true },
      { text: "Routing", correct: false },
      { text: "Internetwork", correct: false },
      { text: "Addressing scheme", correct: false },
      { text: "Mobile IP", correct: false },
    ],
  },
  {
    text: "Both forms of communication (UDP and TCP) use ______, which provides an endpoint for communication between processes:",
    answers: [
      { text: "The socket abstraction", correct: true },
      { text: "Routing", correct: false },
      { text: "Internetwork", correct: false },
      { text: "Addressing scheme", correct: false },
      { text: "Mobile IP", correct: false },
    ],
  },
  // Fourth section
  {
    text: "This assumes that when a pair of processes are establishing a connection, one of them plays the client role and another plays the server role, but thereafter they could be peers:",
    answers: [
      { text: "The API for stream communication", correct: true },
      { text: "Lost messages", correct: false },
      { text: "Flow control", correct: false },
      { text: "The individual primitive data", correct: false },
      { text: "Marshalling and Unmarshalling", correct: false },
    ],
  },
  {
    text: "The TCP protocol uses an acknowledgement scheme. If the sender does not receive an acknowledgement with a time out, it retransmits the message and this is performed when:",
    answers: [
      { text: "Lost messages", correct: true },
      { text: "The API for stream communication", correct: false },
      { text: "Flow control", correct: false },
      { text: "The individual primitive data", correct: false },
      { text: "Marshalling and Unmarshalling", correct: false },
    ],
  },
  {
    text: "The TCP protocol attempts to match the speeds of the processes that read from and write to a stream, this is called:",
    answers: [
      { text: "Flow control", correct: true },
      { text: "Lost messages", correct: false },
      { text: "The API for stream communication", correct: false },
      { text: "The individual primitive data", correct: false },
      { text: "Marshalling and Unmarshalling", correct: false },
    ],
  },
  {
    text: "These items transmitted in messages can be data values of many different types and not all computers store primitive values such as integers in the same order:",
    answers: [
      { text: "The individual primitive data", correct: true },
      { text: "Flow control", correct: false },
      { text: "Lost messages", correct: false },
      { text: "The API for stream communication", correct: false },
      { text: "Marshalling and Unmarshalling", correct: false },
    ],
  },
  {
    text: "This is the process of taking a collection of data items and assembling or disassembling (respectively) into a form suitable for transmission in a message:",
    answers: [
      { text: "Marshalling and Unmarshalling", correct: true },
      { text: "The individual primitive data", correct: false },
      { text: "Flow control", correct: false },
      { text: "Lost messages", correct: false },
      { text: "The API for stream communication", correct: false },
    ],
  },
  {
    text: "They are three alternative approaches to external data representation:",
    answers: [
      {
        text: "XML, CORBA and Java's object serialization",
        correct: true,
      },
      { text: "The individual primitive data", correct: false },
      { text: "Flow control", correct: false },
      { text: "Lost messages", correct: false },
      { text: "Marshalling and Unmarshalling", correct: false },
    ],
  },
  {
    text: "The first one was designed for defining the appearance of web pages while the second one was designed for writing structured documents for the web:",
    answers: [
      { text: "HTML and XML", correct: true },
      {
        text: "XML, CORBA and Java's object serialization",
        correct: false,
      },
      { text: "The individual primitive data", correct: false },
      { text: "Flow control", correct: false },
      { text: "Lost messages", correct: false },
    ],
  },
  {
    text: "They are tagged with 'markup' strings. The tags are used to describe the logical structure of the data and to associate attribute-value pairs with logical structures:",
    answers: [
      { text: "XML data items", correct: true },
      { text: "HTML and XML", correct: false },
      {
        text: "XML, CORBA and Java's object serialization",
        correct: false,
      },
      { text: "The individual primitive data", correct: false },
      { text: "Flow control", correct: false },
    ],
  },
  {
    text: "XML is _____ in the sense that users can define their own tags, in contrast to HTML, which uses a fixed set of tags:",
    answers: [
      { text: "Extensible", correct: true },
      { text: "XML data items", correct: false },
      { text: "HTML and XML", correct: false },
      {
        text: "XML, CORBA and Java's object serialization",
        correct: false,
      },
      { text: "The individual primitive data", correct: false },
    ],
  },
  {
    text: "This is a markup language that was defined by the World Wide Web Consortium (W3C) for general use on the web:",
    answers: [
      { text: "XML", correct: true },
      { text: "Extensible", correct: false },
      { text: "XML data items", correct: false },
      { text: "HTML and XML", correct: false },
      {
        text: "XML, CORBA and Java's object serialization",
        correct: false,
      },
    ],
  },
  {
    text: "The structure of an XML document is defined by pairs of these elements enclosed in angle brackets:",
    answers: [
      { text: "Tags", correct: true },
      { text: "XML", correct: false },
      { text: "Extensible", correct: false },
      { text: "XML data items", correct: false },
      { text: "HTML and XML", correct: false },
    ],
  },
  {
    text: "They define the name of values associated with tags in XML schemes:",
    answers: [
      { text: "XML Attributes", correct: true },
      { text: "Tags", correct: false },
      { text: "XML", correct: false },
      { text: "Extensible", correct: false },
      { text: "XML data items", correct: false },
    ],
  },
  {
    text: "This is used to enable clients to communicate with web services and for defining the interfaces and other properties of web services:",
    answers: [
      { text: "XML Service", correct: true },
      { text: "XML Attributes", correct: false },
      { text: "Tags", correct: false },
      { text: "XML", correct: false },
      { text: "Extensible", correct: false },
    ],
  },
  {
    text: "All the information in XML elements must be expressed as character data. But the question is: how do we represent encrypted elements or secure hashes?",
    answers: [
      { text: "Binary data", correct: true },
      { text: "XML Service", correct: false },
      { text: "XML Attributes", correct: false },
      { text: "Tags", correct: false },
      { text: "XML", correct: false },
    ],
  },
  {
    text: "Every start tag has matched end tag and all tags are correctly nested, these are:",
    answers: [
      { text: "Basic rules of XML", correct: true },
      { text: "Binary data", correct: false },
      { text: "XML Service", correct: false },
      { text: "XML Attributes", correct: false },
      { text: "Tags", correct: false },
    ],
  },
  {
    text: "Every XML document must have this as its first line and must at least specify the version of XML in use (which is currently 1.0):",
    answers: [
      { text: "Prolog", correct: true },
      { text: "Basic rules of XML", correct: false },
      { text: "Binary data", correct: false },
      { text: "XML Service", correct: false },
      { text: "XML Attributes", correct: false },
    ],
  },
  {
    text: "This defines the elements and attributes that can appear in a document, how the elements are nested and the order:",
    answers: [
      { text: "XML Namespace", correct: true },
      { text: "Prolog", correct: false },
      { text: "Basic rules of XML", correct: false },
      { text: "Binary data", correct: false },
      { text: "XML Service", correct: false },
    ],
  },
  {
    text: "This defines the elements and attributes that can appear in a document, how the elements are nested and the order, number of elements, and whether an element is empty orcan include text",
    answers: [
      { text: "XML Schema", correct: true },
      { text: "Prolog", correct: false },
      { text: "Basic rules of XML", correct: false },
      { text: "Binary data", correct: false },
      { text: "XML Service", correct: false },
    ],
  },
  // Fifth section
  {
    text: "This protocol is based on a trio of communication primitives: doOperation, getRequested, and sendReply:",
    answers: [
      { text: "The request-reply protocol", correct: true },
      { text: "Messages identifiers", correct: false },
      { text: "RPC", correct: false },
      { text: "XML RPC Structure", correct: false },
      { text: "XML RPC parameters", correct: false },
    ],
  },
  {
    text: "This scheme involves the management of messages and requires that each message have a unique element by which it may be referenced:",
    answers: [
      { text: "Messages identifiers", correct: true },
      { text: "The request-reply protocol", correct: false },
      { text: "RPC", correct: false },
      { text: "XML RPC Structure", correct: false },
      { text: "XML RPC parameters", correct: false },
    ],
  },
  {
    text: "As its name indicates. It is a mechanism to call a procedure or a function available on a remote computer:",
    answers: [
      { text: "RPC", correct: true },
      { text: "The request-reply protocol", correct: false },
      { text: "Messages identifiers", correct: false },
      { text: "XML RPC Structure", correct: false },
      { text: "XML RPC parameters", correct: false },
    ],
  },
  {
    text: "This uses the HTTP protocol to pass information from a client computer to a server computer and uses a small XML vocabulary to describe the nature of requests and responses:",
    answers: [
      { text: "XML RPC Structure", correct: true },
      { text: "RPC", correct: false },
      { text: "The request-reply protocol", correct: false },
      { text: "Messages identifiers", correct: false },
      { text: "XML RPC parameters", correct: false },
    ],
  },
  {
    text: "This specifies a procedure name and parameters in the XML request, and the server returns either a fault or a response in the XML response:",
    answers: [
      { text: "XML RPC parameters", correct: true },
      { text: "XML RPC Structure", correct: false },
      { text: "RPC", correct: false },
      { text: "The request-reply protocol", correct: false },
      { text: "Messages identifiers", correct: false },
    ],
  },
  {
    text: "Data model, request structures, and response structures are parts of:",
    answers: [
      { text: "XML RPC", correct: true },
      { text: "The individual primitive data", correct: false },
      { text: "XML RPC Structure", correct: false },
      { text: "RPC", correct: false },
      { text: "The request-reply protocol", correct: false },
    ],
  },
  {
    text: "These are a simple list of types and content – structs and arrays are the most complex types available:",
    answers: [
      { text: "The individual primitive data", correct: true },
      { text: "XML RPC", correct: false },
      { text: "XML RPC Structure", correct: false },
      { text: "RPC", correct: false },
      { text: "The request-reply protocol", correct: false },
    ],
  },
];
