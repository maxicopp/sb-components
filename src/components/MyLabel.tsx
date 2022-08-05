import './mylabel.css';

export interface MyLabelProps {
    /**
     * Este es el mensaje a mostrar en la etiqueta
     */
    label: string;
    /**
     * Este es el tamaño de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Colores básicos del botón
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Si quiere todo capitalizado
     */
    allCaps?: boolean;
    /**
     * Color personalizado de la fuente
     */
    fontColor?: string;
    /**
     * Color personalizado del fondo
     */
    backgroundColor?: string;
}

export const MyLabel = ({ label = 'No Label', size = 'normal', color = 'primary', allCaps = false, fontColor, backgroundColor = 'transparent' }: MyLabelProps) => {
    return (
        <span className={`label ${size} text-${color}`} style={{ color: fontColor, backgroundColor }}>
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}
