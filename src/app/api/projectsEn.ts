export const projectsEn = [
    {
        id:"Psoc",
        name: "PSoC (Krypton2)",
        technologies: 'Verilog, Leda, DC, Tetramax, STA, DFT, CDC',
        images: [
            {
                title:'PSoC (Krypton2)',
                src: "assets/images/psoc.webp",
            }
        ],
        detail: "Collaborate with the PSoC validation team to identify all know issues, Strategy to fix and verify issues with minimal impact to schedule, RTL updates, Synthesis and netlist generation for CIC, STA, DFT and CCD, CIC support for validating timing on all async paths, Silicon validation",
        detailIsDisplayed: false
    },
    {
        id:"Benicia",
        name: "USB3.0 (Benicia)",
        technologies: 'Verilog, Leda, DC, Tetramax, STA, DFT, CDC',
        images: [
            {
                title:'benicia',
                src:   "assets/images/usb3.jpeg",
            }
            
        ],
        detail:"u-Architecture and RTL for S-port IP (SD3.0, eMMC4.4, SDIO and CE-ATA I/F), Maintain BROS document, Synthesis, STA, ATPG for 99.8% SAF coverage, CCD, Formal verification, IP submission, FPGA validation support, Silicon Validation support",
        detailIsDisplayed: false,
    },
    {
        id:"Astoria",
        name: "West Bridge (Astoria)",
        technologies: 'Verilog, Leda, DC, Tetramax, STA, DFT, CDC',
        images: [
            {
                title:'astoria',
                src:   "assets/images/astoria.png",
            }
               
        ],
        detail:"Microarchitecture and RTL of Pseudo Nand Interface, Identify methodology to incorporate new test Modes for the device, IP Evaluation - Evaluate Reed-Solomon codec from 3rd party vendor, Full chip Integration, Identify Constrained Random testcases for Pseudo Nand Interface, Interact with s/w team, support 8051 interface for Pseudo Nand Interface, Identify timing parameters based on Industry leading device Datasheets, STA, Support for ATE functional vector generation, FPGA validation and Silicon bring up support, Closure on Char review and PR4, Developed and implemented scheme for RB based DMA.",
        detailIsDisplayed: false,
    },
    {
        id:"image_process",
        name: "Validation of Image Processing Algorithms",
        technologies: 'CPLD, Synthesis, STA',
        images: [
            {
                title:'Portfolio',
                src:   "assets/images/imager.jpeg",
            },
        ],
        detail:"The image processing algorithms were targeted to a demo board FPGA and the images were captured using a PC interfaced through Firewire. Defect Pixel Interpolation, Lens Shading effects, Hue preserving digital gain, Output Re-scaler and Spatial effects were the target algorithms for validation",
        detailIsDisplayed: false,
    },
    {
        id:"imager",
        name: "1.3M Pixel Imager and 1.3M Pixel SoC",
        technologies: 'Verilog, Leda, DC, Tetramax, STA, DFT, CDC',
        images: [
            {
                title:'imager',
                src:   "assets/images/soc.jpeg",
            },
        ],
        detail:"IP Owner - I2C Serial Bus Interface , Microarchitecture, RTL Coding, Functional verification using Synopsys Designware Verification IP, Trial Synthesis, LEC, Full chip verification, Gate level simulation setup, Set up for generation of ATE functional vectors and Silicon Debug Support",
        detailIsDisplayed: false,
    },
    {
        id:"POSIC2GVCPLUS",
        name: "POSIC2GVCPLUS",
        technologies: 'Verilog, Leda, DC, Tetramax, STA, DFT, CDC',
        images: [
            {
                title:'imager',
                src:   "assets/images/posic.jpeg",
            },
        ],
        detail:"Functional verification of Protocol Processor Receive block, which supports de-capsulation of GFP, ATM, HDLC, LAPS protocols, Supports 16 channels and each channel is programmable to support any protocol, Block Level Testbench, Code coverage Analysis, LEC",
        detailIsDisplayed: false,
    }
];

