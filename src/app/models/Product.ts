export interface Product {
    Producent? : string,
    Matryca? : string,
    Rozdzielczosc?: string,
    TypMatrycy?: string,
    DotykowyEkran?: string,
    CPU? : string,
    IloscRdzeni? : string,
    MHZ? : string,
    RAM? : string,
    PojemnoscDysku? : string,
    RodzajDysku? : string,
    GPU? : string,
    VRAM? : string,
    SystemOperacyjny? : string,
    Naped? : string,
}

export interface Disc {
    "@type"?: string, 
    storage?: string
}

export interface GraphicCard {
    name?: string, 
    memory?: string
}

export interface Processor{
    name?: string, 
    physical_cores?: string, 
    clock_speed?: string
}

export interface Screen {
    "@touch"?: string, 
    size?: string, 
    resolution?: string, 
    type?: string
}
export interface ProductXML {
    "@id"?: number,
    disc?: Disc,
    disc_reader?: string,
    graphic_card?: GraphicCard,
    manufacturer?: string
    os?: string,
    processor?: Processor
    ram?: string,
    screen?: Screen
}

export interface Laptop{
    laptop: ProductXML[]
}

export interface Laptops{
    laptops: Laptop;
}

