// Sistema de traducciones inline para MailtoGen Pro
// Translation system with inline translations for MailtoGen Pro

class TranslationManager {
    constructor() {
        this.currentLanguage = 'en';
        this.supportedLanguages = {
            'en': { name: 'English', flag: '🇺🇸' },
            'es': { name: 'Español', flag: '🇪🇸' },
            'zh': { name: '中文', flag: '🇨🇳' },
            'hi': { name: 'हिन्दी', flag: '🇮🇳' },
            'fr': { name: 'Français', flag: '🇫🇷' },
            'de': { name: 'Deutsch', flag: '🇩🇪' },
            'ja': { name: '日本語', flag: '🇯🇵' },
            'ko': { name: '한국어', flag: '🇰🇷' },
            'pt': { name: 'Português', flag: '🇵🇹' },
            'ru': { name: 'Русский', flag: '🇷🇺' },
            'it': { name: 'Italiano', flag: '🇮🇹' },
            'nl': { name: 'Nederlands', flag: '🇳🇱' },
            'sv': { name: 'Svenska', flag: '🇸🇪' },
            'tr': { name: 'Türkçe', flag: '🇹🇷' },
            'pl': { name: 'Polski', flag: '🇵🇱' },
            'ar': { name: 'العربية', flag: '🇦🇪' },
            'th': { name: 'ไทย', flag: '🇹🇭' },
            'vi': { name: 'Tiếng Việt', flag: '🇻🇳' },
            'id': { name: 'Bahasa Indonesia', flag: '🇮🇩' },
            'uk': { name: 'Українська', flag: '🇺🇦' }
        };
        
        // Traducciones inline
        this.translations = {
            'en': {
                "meta": {
                    "title": "Mailto Link Generator - Create Professional Email Links Instantly",
                    "description": "Generate professional mailto links with pre-filled subject, body, CC, BCC, and more. Perfect for developers, marketers, and businesses. Free online tool.",
                    "keywords": "mailto link generator, email link creator, mailto URL, email marketing, web development, contact forms"
                },
                "header": {
                    "title": "Mailto Link Generator",
                    "subtitle": "Create professional email links with pre-filled content"
                },
                "form": {
                    "email_label": "To",
                    "email_placeholder": "recipient@email.com",
                    "subject_label": "Subject",
                    "subject_placeholder": "Email subject",
                    "body_label": "Body",
                    "body_placeholder": "Email content...",
                    "cc_label": "Cc",
                    "cc_placeholder": "copy@email.com",
                    "bcc_label": "Bcc",
                    "bcc_placeholder": "blind@email.com",
                    "link_text": "Link text",
                    "generate_button": "Generate my mailto link",
                    "copy_button": "Copy",
                    "test_button": "Test the link",
                    "validation": {
                        "to_required": "Please enter at least one email address in the \"To\" field",
                        "invalid_email": "Please enter a valid email address"
                    }
                },
                "results": {
                    "title": "Mailto link",
                    "html_code_title": "HTML code",
                    "test_title": "Test the link",
                    "copy_button": "Copy",
                    "copy_success": "Copied!",
                    "copy_error": "Error copying to clipboard"
                },
                "donation": {
                    "title": "Support This Project",
                    "description": "If this tool has been helpful, consider supporting its development with a small donation.",
                    "button_text": "Buy me a coffee ☕",
                    "button": "Buy me a coffee",
                    "support_request": "If this tool has been helpful to you, consider supporting its development with a small coffee donation. Every contribution helps me dedicate more time to improving and maintaining tools like this one.",
                    "appreciation": "Your support means the world to me! ☕✨",
                    "thank_you": "Thank you for using my tool, and I hope it brings efficiency to your projects!",
                    "signature": "—John",
                    "contact": "Questions or feedback? Reach me at john@chefbusiness.co"
                },
                "footer": {
                    "copyright": "© 2024 MailtoGen Pro. All rights reserved.",
                    "privacy": "Privacy Policy",
                    "terms": "Terms of Service",
                    "contact": "Contact"
                },
                "guide": {
                    "title": "Complete Mailto Link Guide",
                    "intro": {
                        "subtitle": "Master the art of mailto links with our comprehensive guide. Learn to create professional email links that work flawlessly across all platforms and email clients.",
                        "donation_thanks": "To be generous people who already made a donation\nThank you ❤️",
                        "main_message": "More importantly, let me tell you about mailto links so you will know how to generate them yourself.",
                        "description": "We'll explore both the technical structure and practical implementation to help you create effective email links."
                    },
                    "what_are_mailto": {
                        "title": "Understanding mailto links",
                        "description": "A mailto link is a powerful HTML hyperlink that instantly opens the user's default email client with pre-filled information. This eliminates the need for users to manually copy email addresses, making communication seamless and professional."
                    },
                    "basic_syntax": {
                        "title": "Basic mailto syntax",
                        "intro": "Every mailto link begins with the protocol identifier:",
                        "simple_example": "Creating simple email links",
                        "description": "The most basic form includes just the recipient's email address immediately after the colon:",
                        "clickable_description": "This creates a clickable link that opens the user's email client with the recipient field pre-filled.",
                        "with_subject": "Adding subject lines",
                        "subject_description": "Subject lines make your mailto links more professional and help recipients understand the email's purpose immediately.",
                        "subject_example": "Basic subject example",
                        "subject_example_description": "Here's a business inquiry with a clear subject line:"
                    },
                    "advanced_features": {
                        "title": "Advanced recipient management",
                        "description": "While single recipients are most reliable, you can include multiple recipients using specific techniques. However, compatibility varies across email clients, so thorough testing is essential.",
                        "multiple_recipients": {
                            "title": "Multiple recipients in TO field",
                            "description": "For multiple primary recipients, separate email addresses with commas (no spaces):"
                        },
                        "alternative_separator": {
                            "title": "Alternative separator method",
                            "description": "If commas don't work with certain email clients, try semicolons:"
                        },
                        "distributed_recipients": {
                            "title": "Recommended approach: Distributed recipients",
                            "description": "The most reliable method distributes recipients across TO, CC, and BCC fields:"
                        },
                        "pro_tip": "Pro tip: Always test your mailto links across different email clients (Gmail, Outlook, Apple Mail) before deployment."
                    },
                    "empty_recipients": {
                        "title": "Handling empty recipients",
                        "description": "Creating mailto links without predefined recipients allows users to choose their own recipients. While less common, this approach has specific use cases like \"share via email\" buttons.",
                        "standard_format": {
                            "title": "Standard empty recipient format",
                            "description": "The most compatible approach uses a question mark directly after mailto:"
                        },
                        "alternative_formats": {
                            "title": "Alternative formats",
                            "description": "Some email clients accept these variations:"
                        },
                        "important_note": "Important: Empty recipient links have limited compatibility. Test thoroughly before implementation."
                    },
                    "parameter_structure": {
                        "title": "Parameter structure and syntax",
                        "description": "Mailto links use URL parameter syntax with specific delimiters:",
                        "question_mark": "Question mark (?): Separates the email address from the first parameter",
                        "ampersand": "Ampersand (&): Separates additional parameters",
                        "examples_title": "Parameter structure examples"
                    },
                    "encoding_guide": {
                        "title": "URL encoding essentials",
                        "description": "Special characters in mailto links must be URL-encoded to ensure proper functionality across all email clients and browsers.",
                        "common_characters": "Common character encodings",
                        "common_characters_description": "Here are the most frequently used URL encodings for mailto links:",
                        "why_encoding_matters": {
                            "title": "Why encoding matters",
                            "description": "Proper encoding ensures your mailto links work consistently across:",
                            "browsers": "Different web browsers (Chrome, Firefox, Safari, Edge)",
                            "email_clients": "Various email clients (Gmail, Outlook, Apple Mail, Thunderbird)",
                            "platforms": "Mobile and desktop platforms"
                        },
                        "pro_tip": "💡 Pro tip: Use our mailto link generator above to automatically handle all encoding for you!"
                    },
                    "encoding": {
                        "characters": {
                            "space": "%20 = space",
                            "exclamation": "%21 = ! (exclamation mark)",
                            "quote": "%22 = \" (quotation mark)",
                            "ampersand": "%26 = & (ampersand)",
                            "comma": "%2C = , (comma)",
                            "colon": "%3A = : (colon)",
                            "question": "%3F = ? (question mark)",
                            "linebreak": "%0A = line break"
                        }
                    },
                    "complete_templates": {
                        "title": "Complete email templates",
                        "description": "Combining subject lines and body content creates comprehensive email templates that save time for both you and your recipients.",
                        "customer_support": {
                            "title": "Customer support template",
                            "description": "Perfect for help desk or support pages:"
                        }
                    },
                    "professional_examples": {
                        "title": "Professional use cases",
                        "description": "Here's a comprehensive business email template with all parameters:",
                        "project_collaboration": {
                            "title": "Project collaboration email",
                            "to": "To: project.manager@company.com",
                            "cc": "Cc: team.lead@company.com",
                            "bcc": "Bcc: archive@company.com",
                            "subject": "Subject: Project Proposal Submission",
                            "body": "Body: Dear Project Manager, I'm submitting our Q4 project proposal for review. Please find the key details below and let me know if you need additional information. Best regards, [Your Name]"
                        },
                        "additional_templates": {
                            "title": "Additional professional templates",
                            "meeting_request": "Meeting request:"
                        }
                    },
                    "html_implementation": {
                        "title": "HTML implementation",
                        "description": "Converting your mailto link into clickable HTML requires proper anchor tag structure and attributes.",
                        "basic_structure": {
                            "title": "Basic HTML structure",
                            "description": "HTML anchor tags consist of opening and closing elements:"
                        },
                        "link_text": {
                            "title": "Adding link text",
                            "description": "The text between the tags becomes the clickable link text:"
                        },
                        "href_attribute": {
                            "title": "Adding the href attribute",
                            "description": "The href attribute contains your mailto link:"
                        },
                        "accessibility": {
                            "title": "Enhanced HTML with accessibility",
                            "description": "For better accessibility and user experience, add descriptive attributes:"
                        },
                        "live_example": {
                            "title": "Live example",
                            "description": "Here's how the link appears to users:"
                        },
                        "demo_link": "Request a Demo"
                    },
                    "best_practices": {
                        "title": "Best practices and tips",
                        "compatibility": {
                            "title": "Cross-platform compatibility",
                            "test_extensively": "Test extensively: Verify links work across major email clients",
                            "keep_simple": "Keep it simple: Avoid overly complex parameter combinations",
                            "mobile_first": "Mobile-first: Ensure links work well on mobile devices",
                            "fallback_options": "Fallback options: Provide alternative contact methods"
                        },
                        "user_experience": {
                            "title": "User experience guidelines",
                            "clear_text": "Clear link text: Use descriptive text that explains the action",
                            "reasonable_defaults": "Reasonable defaults: Pre-fill helpful information without being overwhelming",
                            "privacy": "Privacy consideration: Be mindful of what information you pre-populate",
                            "professional_tone": "Professional tone: Use appropriate language for your audience"
                        },
                        "technical": {
                            "title": "Technical considerations",
                            "character_limits": "Character limits: Some email clients have URL length restrictions",
                            "encoding_accuracy": "Encoding accuracy: Always properly encode special characters",
                            "security": "Security awareness: Avoid including sensitive information in URLs",
                            "analytics": "Analytics tracking: Consider how to track mailto link engagement"
                        }
                    },
                    "final_thoughts": {
                        "title": "Final thoughts",
                        "description": "Mailto links are a powerful tool for streamlining communication between websites and users. When implemented correctly, they provide a seamless bridge between web content and email communication.",
                        "key_success": "Remember that the key to successful mailto implementation lies in understanding your users' needs, testing across platforms, and maintaining simplicity while providing value.",
                        "conclusion": "Whether you're building contact forms, support systems, or marketing campaigns, well-crafted mailto links can significantly improve user engagement and communication efficiency."
                    },
                    "additional_resources": {
                        "title": "Additional resources:",
                        "rfc_6068": "RFC 6068 specification",
                        "w3c_html": "W3C HTML specification",
                        "compatibility_testing": "Email client compatibility testing tools",
                        "encoding_reference": "URL encoding reference guides"
                    },
                    "toc": {
                        "simple_email": "Creating simple email links",
                        "empty_recipient": "Handling empty recipients",
                        "parameter_structure": "Parameter structure and syntax",
                        "subject_lines": "Adding subject lines",
                        "complete_emails": "Complete email templates",
                        "professional_examples": "Professional use cases",
                        "html_implementation": "HTML implementation",
                        "final_thoughts": "Final thoughts"
                    }
                }
            },
            'es': {
                "meta": {
                    "title": "Generador de Enlaces Mailto - Crea Enlaces de Email Profesionales al Instante",
                    "description": "Genera enlaces mailto profesionales con asunto, cuerpo, CC, BCC y más prellenados. Perfecto para desarrolladores, marketers y empresas. Herramienta gratuita online.",
                    "keywords": "generador enlaces mailto, creador enlaces email, URL mailto, marketing por email, desarrollo web, formularios de contacto"
                },
                "header": {
                    "title": "Generador de Enlaces Mailto",
                    "subtitle": "Crea enlaces de email profesionales al instante"
                },
                "form": {
                    "email_label": "Para",
                    "email_placeholder": "destinatario@ejemplo.com",
                    "subject_label": "Asunto",
                    "subject_placeholder": "Asunto del email",
                    "body_label": "Cuerpo",
                    "body_placeholder": "Contenido del email...",
                    "cc_label": "Cc",
                    "cc_placeholder": "copia@ejemplo.com",
                    "bcc_label": "Bcc",
                    "bcc_placeholder": "copia_oculta@ejemplo.com",
                    "link_text": "Texto del enlace",
                    "generate_button": "Generar mi enlace mailto",
                    "copy_button": "Copiar",
                    "test_button": "Probar el enlace",
                    "validation": {
                        "to_required": "Por favor ingresa al menos una dirección de email en el campo \"Para\"",
                        "invalid_email": "Por favor ingresa una dirección de email válida"
                    }
                },
                "results": {
                    "title": "Enlace mailto",
                    "html_code_title": "Código HTML",
                    "test_title": "Probar el enlace",
                    "copy_button": "Copiar",
                    "copy_success": "¡Copiado!",
                    "copy_error": "Error al copiar al portapapeles"
                },
                "donation": {
                    "title": "Apoya Este Proyecto",
                    "description": "Si esta herramienta te ha sido útil, considera apoyar su desarrollo con una pequeña donación.",
                    "button_text": "Cómprame un café ☕",
                    "button": "Cómprame un café",
                    "support_request": "Si esta herramienta te ha sido útil, considera apoyar su desarrollo con una pequeña donación de café. Cada contribución me ayuda a dedicar más tiempo a mejorar y mantener herramientas como esta.",
                    "appreciation": "¡Tu apoyo significa mucho para mí! ☕✨",
                    "thank_you": "¡Gracias por usar mi herramienta, espero que aporte eficiencia a tus proyectos!",
                    "signature": "—John",
                    "contact": "¿Preguntas o comentarios? Escríbeme a john@chefbusiness.co"
                },
                "footer": {
                    "copyright": "© 2024 MailtoGen Pro. Todos los derechos reservados.",
                    "privacy": "Política de Privacidad",
                    "terms": "Términos de Servicio",
                    "contact": "Contacto"
                },
                "guide": {
                    "title": "Guía Completa de Enlaces Mailto",
                    "intro": {
                        "subtitle": "Domina el arte de los enlaces mailto con nuestra guía completa. Aprende a crear enlaces de email profesionales que funcionen perfectamente en todas las plataformas y clientes de correo.",
                        "donation_thanks": "Para las personas generosas que ya hicieron una donación\n¡Gracias! ❤️",
                        "main_message": "Más importante aún, déjame contarte sobre los enlaces mailto para que sepas cómo generarlos tú mismo.",
                        "description": "Exploraremos tanto la estructura técnica como la implementación práctica para ayudarte a crear enlaces de email efectivos."
                    },
                    "what_are_mailto": {
                        "title": "Entendiendo los enlaces mailto",
                        "description": "Un enlace mailto es un hipervínculo HTML poderoso que abre instantáneamente el cliente de email predeterminado del usuario con información prellenada. Esto elimina la necesidad de que los usuarios copien manualmente direcciones de email, haciendo la comunicación fluida y profesional."
                    },
                    "basic_syntax": {
                        "title": "Sintaxis básica de mailto",
                        "intro": "Cada enlace mailto comienza con el identificador de protocolo:",
                        "simple_example": "Creando enlaces de email simples",
                        "description": "La forma más básica incluye solo la dirección de email del destinatario inmediatamente después de los dos puntos:",
                        "clickable_description": "Esto crea un enlace clickeable que abre el cliente de email del usuario con el campo destinatario prellenado.",
                        "with_subject": "Agregando líneas de asunto",
                        "subject_description": "Las líneas de asunto hacen que tus enlaces mailto sean más profesionales y ayudan a los destinatarios a entender el propósito del email inmediatamente.",
                        "subject_example": "Ejemplo básico de asunto",
                        "subject_example_description": "Aquí tienes una consulta comercial con una línea de asunto clara:"
                    },
                    "advanced_features": {
                        "title": "Gestión avanzada de destinatarios",
                        "description": "Aunque los destinatarios únicos son más confiables, puedes incluir múltiples destinatarios usando técnicas específicas. Sin embargo, la compatibilidad varía entre clientes de email, por lo que las pruebas exhaustivas son esenciales.",
                        "multiple_recipients": {
                            "title": "Múltiples destinatarios en el campo PARA",
                            "description": "Para múltiples destinatarios principales, separa las direcciones de email con comas (sin espacios):"
                        },
                        "alternative_separator": {
                            "title": "Método de separador alternativo",
                            "description": "Si las comas no funcionan con ciertos clientes de email, prueba con punto y coma:"
                        },
                        "distributed_recipients": {
                            "title": "Enfoque recomendado: Destinatarios distribuidos",
                            "description": "El método más confiable distribuye destinatarios entre los campos PARA, CC y BCC:"
                        },
                        "pro_tip": "Consejo profesional: Siempre prueba tus enlaces mailto en diferentes clientes de email (Gmail, Outlook, Apple Mail) antes del despliegue."
                    },
                    "empty_recipients": {
                        "title": "Manejando destinatarios vacíos",
                        "description": "Crear enlaces mailto sin destinatarios predefinidos permite a los usuarios elegir sus propios destinatarios. Aunque menos común, este enfoque tiene casos de uso específicos como botones de \"compartir por email\".",
                        "standard_format": {
                            "title": "Formato estándar de destinatario vacío",
                            "description": "El enfoque más compatible usa un signo de interrogación directamente después de mailto:"
                        },
                        "alternative_formats": {
                            "title": "Formatos alternativos",
                            "description": "Algunos clientes de email aceptan estas variaciones:"
                        },
                        "important_note": "Importante: Los enlaces de destinatario vacío tienen compatibilidad limitada. Prueba exhaustivamente antes de la implementación."
                    },
                    "parameter_structure": {
                        "title": "Estructura y sintaxis de parámetros",
                        "description": "Los enlaces mailto usan sintaxis de parámetros URL con delimitadores específicos:",
                        "question_mark": "Signo de interrogación (?): Separa la dirección de email del primer parámetro",
                        "ampersand": "Ampersand (&): Separa parámetros adicionales",
                        "examples_title": "Ejemplos de estructura de parámetros"
                    },
                    "encoding_guide": {
                        "title": "Fundamentos de codificación URL",
                        "description": "Los caracteres especiales en enlaces mailto deben estar codificados en URL para asegurar funcionalidad adecuada en todos los clientes de email y navegadores.",
                        "common_characters": "Codificaciones de caracteres comunes",
                        "common_characters_description": "Aquí están las codificaciones URL más frecuentemente usadas para enlaces mailto:",
                        "why_encoding_matters": {
                            "title": "Por qué importa la codificación",
                            "description": "La codificación adecuada asegura que tus enlaces mailto funcionen consistentemente en:",
                            "browsers": "Diferentes navegadores web (Chrome, Firefox, Safari, Edge)",
                            "email_clients": "Varios clientes de email (Gmail, Outlook, Apple Mail, Thunderbird)",
                            "platforms": "Plataformas móviles y de escritorio"
                        },
                        "pro_tip": "💡 Consejo profesional: ¡Usa nuestro generador de enlaces mailto arriba para manejar automáticamente toda la codificación!"
                    },
                    "encoding": {
                        "characters": {
                            "space": "%20 = espacio",
                            "exclamation": "%21 = ! (signo de exclamación)",
                            "quote": "%22 = \" (comillas)",
                            "ampersand": "%26 = & (ampersand)",
                            "comma": "%2C = , (coma)",
                            "colon": "%3A = : (dos puntos)",
                            "question": "%3F = ? (signo de interrogación)",
                            "linebreak": "%0A = salto de línea"
                        }
                    },
                    "complete_templates": {
                        "title": "Plantillas de email completas",
                        "description": "Combinar líneas de asunto y contenido del cuerpo crea plantillas de email completas que ahorran tiempo tanto a ti como a tus destinatarios.",
                        "customer_support": {
                            "title": "Plantilla de soporte al cliente",
                            "description": "Perfecta para páginas de mesa de ayuda o soporte:"
                        }
                    },
                    "professional_examples": {
                        "title": "Casos de uso profesionales",
                        "description": "Aquí tienes una plantilla de email comercial completa con todos los parámetros:",
                        "project_collaboration": {
                            "title": "Email de colaboración de proyecto",
                            "to": "Para: project.manager@company.com",
                            "cc": "Cc: team.lead@company.com",
                            "bcc": "Bcc: archive@company.com",
                            "subject": "Asunto: Envío de Propuesta de Proyecto",
                            "body": "Cuerpo: Estimado Gerente de Proyecto, Estoy enviando nuestra propuesta de proyecto Q4 para revisión. Por favor encuentra los detalles clave abajo y déjame saber si necesitas información adicional. Saludos cordiales, [Tu Nombre]"
                        },
                        "additional_templates": {
                            "title": "Plantillas profesionales adicionales",
                            "meeting_request": "Solicitud de reunión:"
                        }
                    },
                    "html_implementation": {
                        "title": "Implementación HTML",
                        "description": "Convertir tu enlace mailto en HTML clickeable requiere estructura y atributos de etiqueta anchor apropiados.",
                        "basic_structure": {
                            "title": "Estructura HTML básica",
                            "description": "Las etiquetas anchor HTML consisten en elementos de apertura y cierre:"
                        },
                        "link_text": {
                            "title": "Agregando texto del enlace",
                            "description": "El texto entre las etiquetas se convierte en el texto del enlace clickeable:"
                        },
                        "href_attribute": {
                            "title": "Agregando el atributo href",
                            "description": "El atributo href contiene tu enlace mailto:"
                        },
                        "accessibility": {
                            "title": "HTML mejorado con accesibilidad",
                            "description": "Para mejor accesibilidad y experiencia de usuario, agrega atributos descriptivos:"
                        },
                        "live_example": {
                            "title": "Ejemplo en vivo",
                            "description": "Así es como aparece el enlace a los usuarios:"
                        },
                        "demo_link": "Solicitar una Demo"
                    },
                    "best_practices": {
                        "title": "Mejores prácticas y consejos",
                        "compatibility": {
                            "title": "Compatibilidad multiplataforma",
                            "test_extensively": "Prueba extensivamente: Verifica que los enlaces funcionen en los principales clientes de email",
                            "keep_simple": "Manténlo simple: Evita combinaciones de parámetros demasiado complejas",
                            "mobile_first": "Móvil primero: Asegúrate de que los enlaces funcionen bien en dispositivos móviles",
                            "fallback_options": "Opciones de respaldo: Proporciona métodos de contacto alternativos"
                        },
                        "user_experience": {
                            "title": "Pautas de experiencia de usuario",
                            "clear_text": "Texto de enlace claro: Usa texto descriptivo que explique la acción",
                            "reasonable_defaults": "Valores predeterminados razonables: Prellena información útil sin ser abrumador",
                            "privacy": "Consideración de privacidad: Ten cuidado con qué información prepobles",
                            "professional_tone": "Tono profesional: Usa lenguaje apropiado para tu audiencia"
                        },
                        "technical": {
                            "title": "Consideraciones técnicas",
                            "character_limits": "Límites de caracteres: Algunos clientes de email tienen restricciones de longitud de URL",
                            "encoding_accuracy": "Precisión de codificación: Siempre codifica apropiadamente los caracteres especiales",
                            "security": "Conciencia de seguridad: Evita incluir información sensible en URLs",
                            "analytics": "Seguimiento de analíticas: Considera cómo rastrear el engagement de enlaces mailto"
                        }
                    },
                    "final_thoughts": {
                        "title": "Reflexiones finales",
                        "description": "Los enlaces mailto son una herramienta poderosa para agilizar la comunicación entre sitios web y usuarios. Cuando se implementan correctamente, proporcionan un puente fluido entre el contenido web y la comunicación por email.",
                        "key_success": "Recuerda que la clave para una implementación exitosa de mailto radica en entender las necesidades de tus usuarios, probar en plataformas y mantener simplicidad mientras proporcionas valor.",
                        "conclusion": "Ya sea que estés construyendo formularios de contacto, sistemas de soporte o campañas de marketing, enlaces mailto bien elaborados pueden mejorar significativamente el engagement del usuario y la eficiencia de comunicación."
                    },
                    "additional_resources": {
                        "title": "Recursos adicionales:",
                        "rfc_6068": "Especificación RFC 6068",
                        "w3c_html": "Especificación HTML W3C",
                        "compatibility_testing": "Herramientas de prueba de compatibilidad de clientes de email",
                        "encoding_reference": "Guías de referencia de codificación URL"
                    },
                    "toc": {
                        "simple_email": "Creando enlaces de email simples",
                        "empty_recipient": "Manejando destinatarios vacíos",
                        "parameter_structure": "Estructura y sintaxis de parámetros",
                        "subject_lines": "Agregando líneas de asunto",
                        "complete_emails": "Plantillas de email completas",
                        "professional_examples": "Casos de uso profesionales",
                        "html_implementation": "Implementación HTML",
                        "final_thoughts": "Reflexiones finales"
                    }
                }
            },
            'zh': {
                "meta": {
                    "title": "Mailto链接生成器 - 即时创建专业邮件链接",
                    "description": "生成专业的mailto链接，预填主题、正文、抄送、密送等。完美适用于开发者、营销人员和企业。免费在线工具。",
                    "keywords": "mailto链接生成器, 邮件链接创建器, mailto URL, 邮件营销, 网页开发, 联系表单"
                },
                "header": {
                    "title": "Mailto链接生成器",
                    "subtitle": "即时创建专业邮件链接"
                },
                "form": {
                    "email_label": "收件人",
                    "email_placeholder": "recipient@example.com",
                    "subject_label": "主题",
                    "subject_placeholder": "邮件主题",
                    "body_label": "正文",
                    "body_placeholder": "邮件内容...",
                    "cc_label": "抄送",
                    "cc_placeholder": "cc@example.com",
                    "bcc_label": "密送",
                    "bcc_placeholder": "bcc@example.com",
                    "link_text": "链接文本",
                    "generate_button": "生成我的mailto链接",
                    "copy_button": "复制",
                    "test_button": "测试链接",
                    "validation": {
                        "to_required": "请在收件人字段中至少输入一个邮箱地址",
                        "invalid_email": "请输入有效的邮箱地址"
                    }
                },
                "results": {
                    "title": "Mailto链接",
                    "html_code_title": "HTML代码",
                    "test_title": "测试链接",
                    "copy_button": "复制",
                    "copy_success": "已复制！",
                    "copy_error": "复制到剪贴板时出错"
                },
                "donation": {
                    "title": "支持这个项目",
                    "description": "如果这个工具对您有帮助，请考虑通过小额捐赠来支持其开发。",
                    "button_text": "请我喝咖啡 ☕",
                    "button": "请我喝咖啡",
                    "support_request": "如果这个工具对您有帮助，请考虑通过小额咖啡捐赠来支持其开发。每一份贡献都能帮助我投入更多时间来改进和维护这样的工具。",
                    "appreciation": "您的支持对我意义重大！☕✨",
                    "thank_you": "感谢您使用我的工具，希望它能为您的项目带来效率！",
                    "signature": "—John",
                    "contact": "有问题或反馈？请联系我：john@chefbusiness.co"
                },
                "footer": {
                    "copyright": "© 2024 MailtoGen Pro. 保留所有权利。",
                    "privacy": "隐私政策",
                    "terms": "服务条款",
                    "contact": "联系我们"
                },
                "guide": {
                    "title": "完整的Mailto链接指南",
                    "intro": {
                        "subtitle": "通过我们的综合指南掌握mailto链接的艺术。学习创建在所有平台和邮件客户端上完美运行的专业邮件链接。",
                        "donation_thanks": "致已经慷慨捐赠的朋友们\n谢谢！❤️",
                        "main_message": "更重要的是，让我告诉您关于mailto链接的知识，这样您就知道如何自己生成它们。",
                        "description": "我们将探索技术结构和实际实现，帮助您创建有效的邮件链接。"
                    },
                    "what_are_mailto": {
                        "title": "理解mailto链接",
                        "description": "mailto链接是一个强大的HTML超链接，可以立即打开用户的默认邮件客户端并预填信息。这消除了用户手动复制邮件地址的需要，使沟通变得无缝和专业。"
                    },
                    "basic_syntax": {
                        "title": "基本mailto语法",
                        "intro": "每个mailto链接都以协议标识符开始：",
                        "simple_example": "创建简单的邮件链接",
                        "description": "最基本的形式只包括冒号后面的收件人邮件地址：",
                        "clickable_description": "这创建了一个可点击的链接，打开用户的邮件客户端并预填收件人字段。",
                        "with_subject": "添加主题行",
                        "subject_description": "主题行使您的mailto链接更专业，并帮助收件人立即理解邮件的目的。",
                        "subject_example": "基本主题示例",
                        "subject_example_description": "这是一个带有清晰主题行的商业询问："
                    },
                    "advanced_features": {
                        "title": "高级收件人管理",
                        "description": "虽然单个收件人最可靠，但您可以使用特定技术包含多个收件人。但是，兼容性在不同邮件客户端之间有所不同，因此彻底测试是必要的。",
                        "multiple_recipients": {
                            "title": "TO字段中的多个收件人",
                            "description": "对于多个主要收件人，用逗号分隔邮件地址（无空格）："
                        },
                        "alternative_separator": {
                            "title": "替代分隔符方法",
                            "description": "如果逗号在某些邮件客户端不起作用，请尝试分号："
                        },
                        "distributed_recipients": {
                            "title": "推荐方法：分布式收件人",
                            "description": "最可靠的方法是将收件人分布在TO、CC和BCC字段中："
                        },
                        "pro_tip": "专业提示：在部署之前，始终在不同的邮件客户端（Gmail、Outlook、Apple Mail）上测试您的mailto链接。"
                    },
                    "empty_recipients": {
                        "title": "处理空收件人",
                        "description": "创建没有预定义收件人的mailto链接允许用户选择自己的收件人。虽然不太常见，但这种方法有特定的用例，如\"通过邮件分享\"按钮。",
                        "standard_format": {
                            "title": "标准空收件人格式",
                            "description": "最兼容的方法是在mailto后直接使用问号："
                        },
                        "alternative_formats": {
                            "title": "替代格式",
                            "description": "一些邮件客户端接受这些变体："
                        },
                        "important_note": "重要：空收件人链接的兼容性有限。在实施前请彻底测试。"
                    },
                    "parameter_structure": {
                        "title": "参数结构和语法",
                        "description": "Mailto链接使用URL参数语法和特定分隔符：",
                        "question_mark": "问号（?）：将邮件地址与第一个参数分开",
                        "ampersand": "和号（&）：分隔附加参数",
                        "examples_title": "参数结构示例"
                    },
                    "encoding_guide": {
                        "title": "URL编码要点",
                        "description": "mailto链接中的特殊字符必须进行URL编码，以确保在所有邮件客户端和浏览器中正常运行。",
                        "common_characters": "常见字符编码",
                        "common_characters_description": "以下是mailto链接最常用的URL编码：",
                        "why_encoding_matters": {
                            "title": "为什么编码很重要",
                            "description": "正确的编码确保您的mailto链接在以下环境中一致工作：",
                            "browsers": "不同的网络浏览器（Chrome、Firefox、Safari、Edge）",
                            "email_clients": "各种邮件客户端（Gmail、Outlook、Apple Mail、Thunderbird）",
                            "platforms": "移动和桌面平台"
                        },
                        "pro_tip": "💡 专业提示：使用上面的mailto链接生成器自动处理所有编码！"
                    },
                    "encoding": {
                        "characters": {
                            "space": "%20 = 空格",
                            "exclamation": "%21 = ! (感叹号)",
                            "quote": "%22 = \" (引号)",
                            "ampersand": "%26 = & (和号)",
                            "comma": "%2C = , (逗号)",
                            "colon": "%3A = : (冒号)",
                            "question": "%3F = ? (问号)",
                            "linebreak": "%0A = 换行符"
                        }
                    },
                    "complete_templates": {
                        "title": "完整的邮件模板",
                        "description": "结合主题行和正文内容创建全面的邮件模板，为您和收件人节省时间。",
                        "customer_support": {
                            "title": "客户支持模板",
                            "description": "完美适用于帮助台或支持页面："
                        }
                    },
                    "professional_examples": {
                        "title": "专业用例",
                        "description": "这是一个包含所有参数的综合商业邮件模板：",
                        "project_collaboration": {
                            "title": "项目协作邮件",
                            "to": "收件人：project.manager@company.com",
                            "cc": "抄送：team.lead@company.com",
                            "bcc": "密送：archive@company.com",
                            "subject": "主题：项目提案提交",
                            "body": "正文：尊敬的项目经理，我正在提交我们的Q4项目提案供审查。请在下面找到关键详细信息，如果您需要其他信息，请告诉我。此致敬礼，[您的姓名]"
                        },
                        "additional_templates": {
                            "title": "其他专业模板",
                            "meeting_request": "会议请求："
                        }
                    },
                    "html_implementation": {
                        "title": "HTML实现",
                        "description": "将您的mailto链接转换为可点击的HTML需要适当的锚标签结构和属性。",
                        "basic_structure": {
                            "title": "基本HTML结构",
                            "description": "HTML锚标签由开始和结束元素组成："
                        },
                        "link_text": {
                            "title": "添加链接文本",
                            "description": "标签之间的文本成为可点击的链接文本："
                        },
                        "href_attribute": {
                            "title": "添加href属性",
                            "description": "href属性包含您的mailto链接："
                        },
                        "accessibility": {
                            "title": "增强的HTML与可访问性",
                            "description": "为了更好的可访问性和用户体验，添加描述性属性："
                        },
                        "live_example": {
                            "title": "实时示例",
                            "description": "链接对用户的显示方式："
                        },
                        "demo_link": "请求演示"
                    },
                    "best_practices": {
                        "title": "最佳实践和技巧",
                        "compatibility": {
                            "title": "跨平台兼容性",
                            "test_extensively": "广泛测试：验证链接在主要邮件客户端中工作",
                            "keep_simple": "保持简单：避免过于复杂的参数组合",
                            "mobile_first": "移动优先：确保链接在移动设备上运行良好",
                            "fallback_options": "备用选项：提供替代联系方法"
                        },
                        "user_experience": {
                            "title": "用户体验指南",
                            "clear_text": "清晰的链接文本：使用描述性文本解释操作",
                            "reasonable_defaults": "合理的默认值：预填有用信息而不会让人感到压倒",
                            "privacy": "隐私考虑：注意您预填的信息",
                            "professional_tone": "专业语调：为您的受众使用适当的语言"
                        },
                        "technical": {
                            "title": "技术考虑",
                            "character_limits": "字符限制：一些邮件客户端有URL长度限制",
                            "encoding_accuracy": "编码准确性：始终正确编码特殊字符",
                            "security": "安全意识：避免在URL中包含敏感信息",
                            "analytics": "分析跟踪：考虑如何跟踪mailto链接参与度"
                        }
                    },
                    "final_thoughts": {
                        "title": "最后的想法",
                        "description": "Mailto链接是简化网站和用户之间沟通的强大工具。正确实施时，它们在网络内容和邮件通信之间提供无缝桥梁。",
                        "key_success": "记住，成功的mailto实施的关键在于理解用户需求、跨平台测试，并在提供价值的同时保持简单性。",
                        "conclusion": "无论您是构建联系表单、支持系统还是营销活动，精心制作的mailto链接都能显著提高用户参与度和沟通效率。"
                    },
                    "additional_resources": {
                        "title": "其他资源：",
                        "rfc_6068": "RFC 6068规范",
                        "w3c_html": "W3C HTML规范",
                        "compatibility_testing": "邮件客户端兼容性测试工具",
                        "encoding_reference": "URL编码参考指南"
                    },
                    "toc": {
                        "simple_email": "创建简单的邮件链接",
                        "empty_recipient": "处理空收件人",
                        "parameter_structure": "参数结构和语法",
                        "subject_lines": "添加主题行",
                        "complete_emails": "完整的邮件模板",
                        "professional_examples": "专业用例",
                        "html_implementation": "HTML实现",
                        "final_thoughts": "最后的想法"
                    }
                }
            },
            'fr': {
                "meta": {
                    "title": "Générateur de Liens Mailto - Créez des Liens Email Professionnels Instantanément",
                    "description": "Générez des liens mailto professionnels avec sujet, corps, CC, BCC pré-remplis. Parfait pour les développeurs, marketeurs et entreprises. Outil gratuit en ligne.",
                    "keywords": "générateur liens mailto, créateur liens email, URL mailto, marketing email, développement web, formulaires de contact"
                },
                "header": {
                    "title": "Générateur de Liens Mailto",
                    "subtitle": "Créez des liens email professionnels instantanément"
                },
                "form": {
                    "email_label": "Destinataire",
                    "email_placeholder": "destinataire@exemple.com",
                    "subject_label": "Sujet",
                    "subject_placeholder": "Sujet de l'email",
                    "body_label": "Corps",
                    "body_placeholder": "Contenu de l'email...",
                    "cc_label": "Cc",
                    "cc_placeholder": "copie@exemple.com",
                    "bcc_label": "Bcc",
                    "bcc_placeholder": "copie_cachee@exemple.com",
                    "link_text": "Texte du lien",
                    "generate_button": "Générer mon lien mailto",
                    "copy_button": "Copier",
                    "test_button": "Tester le lien",
                    "validation": {
                        "to_required": "Veuillez saisir au moins une adresse email dans le champ \"Destinataire\"",
                        "invalid_email": "Veuillez saisir une adresse email valide"
                    }
                },
                "results": {
                    "title": "Lien mailto",
                    "html_code_title": "Code HTML",
                    "test_title": "Tester le lien",
                    "copy_button": "Copier",
                    "copy_success": "Copié !",
                    "copy_error": "Erreur lors de la copie dans le presse-papiers"
                },
                "donation": {
                    "title": "Soutenez ce Projet",
                    "description": "Si cet outil vous a été utile, considérez soutenir son développement avec un petit don.",
                    "button_text": "Offrez-moi un café ☕",
                    "button": "Offrez-moi un café",
                    "support_request": "Si cet outil vous a été utile, considérez soutenir son développement avec un petit don de café. Chaque contribution m'aide à consacrer plus de temps à l'amélioration et à la maintenance d'outils comme celui-ci.",
                    "appreciation": "Votre soutien compte énormément pour moi ! ☕✨",
                    "thank_you": "Merci d'utiliser mon outil, j'espère qu'il apportera de l'efficacité à vos projets !",
                    "signature": "—John",
                    "contact": "Questions ou commentaires ? Contactez-moi à john@chefbusiness.co"
                },
                "footer": {
                    "copyright": "© 2024 MailtoGen Pro. Tous droits réservés.",
                    "privacy": "Politique de Confidentialité",
                    "terms": "Conditions de Service",
                    "contact": "Contact"
                },
                "guide": {
                    "title": "Guide Complet des Liens Mailto",
                    "intro": {
                        "subtitle": "Maîtrisez l'art des liens mailto avec notre guide complet. Apprenez à créer des liens email professionnels qui fonctionnent parfaitement sur toutes les plateformes et clients de messagerie.",
                        "donation_thanks": "Aux personnes généreuses qui ont déjà fait un don\nMerci ! ❤️",
                        "main_message": "Plus important encore, laissez-moi vous parler des liens mailto pour que vous sachiez comment les générer vous-même.",
                        "description": "Nous explorerons à la fois la structure technique et l'implémentation pratique pour vous aider à créer des liens email efficaces."
                    },
                    "what_are_mailto": {
                        "title": "Comprendre les liens mailto",
                        "description": "Un lien mailto est un hyperlien HTML puissant qui ouvre instantanément le client de messagerie par défaut de l'utilisateur avec des informations pré-remplies. Cela élimine le besoin pour les utilisateurs de copier manuellement les adresses email, rendant la communication fluide et professionnelle."
                    },
                    "basic_syntax": {
                        "title": "Syntaxe de base mailto",
                        "intro": "Chaque lien mailto commence par l'identifiant de protocole :",
                        "simple_example": "Créer des liens email simples",
                        "description": "La forme la plus basique inclut seulement l'adresse email du destinataire immédiatement après les deux-points :",
                        "clickable_description": "Cela crée un lien cliquable qui ouvre le client de messagerie de l'utilisateur avec le champ destinataire pré-rempli.",
                        "with_subject": "Ajouter des lignes d'objet",
                        "subject_description": "Les lignes d'objet rendent vos liens mailto plus professionnels et aident les destinataires à comprendre immédiatement le but de l'email.",
                        "subject_example": "Exemple d'objet de base",
                        "subject_example_description": "Voici une demande commerciale avec une ligne d'objet claire :"
                    },
                    "advanced_features": {
                        "title": "Gestion avancée des destinataires",
                        "description": "Bien que les destinataires uniques soient les plus fiables, vous pouvez inclure plusieurs destinataires en utilisant des techniques spécifiques. Cependant, la compatibilité varie entre les clients de messagerie, donc des tests approfondis sont essentiels.",
                        "multiple_recipients": {
                            "title": "Plusieurs destinataires dans le champ TO",
                            "description": "Pour plusieurs destinataires principaux, séparez les adresses email avec des virgules (sans espaces) :"
                        },
                        "alternative_separator": {
                            "title": "Méthode de séparateur alternatif",
                            "description": "Si les virgules ne fonctionnent pas avec certains clients de messagerie, essayez les points-virgules :"
                        },
                        "distributed_recipients": {
                            "title": "Approche recommandée : Destinataires distribués",
                            "description": "La méthode la plus fiable distribue les destinataires entre les champs TO, CC et BCC :"
                        },
                        "pro_tip": "Conseil pro : Testez toujours vos liens mailto sur différents clients de messagerie (Gmail, Outlook, Apple Mail) avant le déploiement."
                    },
                    "empty_recipients": {
                        "title": "Gérer les destinataires vides",
                        "description": "Créer des liens mailto sans destinataires prédéfinis permet aux utilisateurs de choisir leurs propres destinataires. Bien que moins courant, cette approche a des cas d'usage spécifiques comme les boutons \"partager par email\".",
                        "standard_format": {
                            "title": "Format standard de destinataire vide",
                            "description": "L'approche la plus compatible utilise un point d'interrogation directement après mailto :"
                        },
                        "alternative_formats": {
                            "title": "Formats alternatifs",
                            "description": "Certains clients de messagerie acceptent ces variations :"
                        },
                        "important_note": "Important : Les liens de destinataire vide ont une compatibilité limitée. Testez minutieusement avant l'implémentation."
                    },
                    "parameter_structure": {
                        "title": "Structure et syntaxe des paramètres",
                        "description": "Les liens mailto utilisent la syntaxe des paramètres URL avec des délimiteurs spécifiques :",
                        "question_mark": "Point d'interrogation (?) : Sépare l'adresse email du premier paramètre",
                        "ampersand": "Esperluette (&) : Sépare les paramètres supplémentaires",
                        "examples_title": "Exemples de structure de paramètres"
                    },
                    "encoding_guide": {
                        "title": "Essentiels de l'encodage URL",
                        "description": "Les caractères spéciaux dans les liens mailto doivent être encodés en URL pour assurer un fonctionnement correct sur tous les clients de messagerie et navigateurs.",
                        "common_characters": "Encodages de caractères courants",
                        "common_characters_description": "Voici les encodages URL les plus fréquemment utilisés pour les liens mailto :",
                        "why_encoding_matters": {
                            "title": "Pourquoi l'encodage est important",
                            "description": "Un encodage approprié assure que vos liens mailto fonctionnent de manière cohérente sur :",
                            "browsers": "Différents navigateurs web (Chrome, Firefox, Safari, Edge)",
                            "email_clients": "Divers clients de messagerie (Gmail, Outlook, Apple Mail, Thunderbird)",
                            "platforms": "Plateformes mobiles et de bureau"
                        },
                        "pro_tip": "💡 Conseil pro : Utilisez notre générateur de liens mailto ci-dessus pour gérer automatiquement tout l'encodage !"
                    },
                    "encoding": {
                        "characters": {
                            "space": "%20 = espace",
                            "exclamation": "%21 = ! (point d'exclamation)",
                            "quote": "%22 = \" (guillemets)",
                            "ampersand": "%26 = & (esperluette)",
                            "comma": "%2C = , (virgule)",
                            "colon": "%3A = : (deux-points)",
                            "question": "%3F = ? (point d'interrogation)",
                            "linebreak": "%0A = saut de ligne"
                        }
                    },
                    "complete_templates": {
                        "title": "Modèles d'email complets",
                        "description": "Combiner les lignes d'objet et le contenu du corps crée des modèles d'email complets qui font gagner du temps à vous et à vos destinataires.",
                        "customer_support": {
                            "title": "Modèle de support client",
                            "description": "Parfait pour les pages d'aide ou de support :"
                        }
                    },
                    "professional_examples": {
                        "title": "Cas d'usage professionnels",
                        "description": "Voici un modèle d'email commercial complet avec tous les paramètres :",
                        "project_collaboration": {
                            "title": "Email de collaboration de projet",
                            "to": "À : project.manager@company.com",
                            "cc": "Cc : team.lead@company.com",
                            "bcc": "Bcc : archive@company.com",
                            "subject": "Objet : Soumission de Proposition de Projet",
                            "body": "Corps : Cher Chef de Projet, Je soumets notre proposition de projet Q4 pour examen. Veuillez trouver les détails clés ci-dessous et faites-moi savoir si vous avez besoin d'informations supplémentaires. Cordialement, [Votre Nom]"
                        },
                        "additional_templates": {
                            "title": "Modèles professionnels supplémentaires",
                            "meeting_request": "Demande de réunion :"
                        }
                    },
                    "html_implementation": {
                        "title": "Implémentation HTML",
                        "description": "Convertir votre lien mailto en HTML cliquable nécessite une structure et des attributs de balise d'ancrage appropriés.",
                        "basic_structure": {
                            "title": "Structure HTML de base",
                            "description": "Les balises d'ancrage HTML consistent en éléments d'ouverture et de fermeture :"
                        },
                        "link_text": {
                            "title": "Ajouter du texte de lien",
                            "description": "Le texte entre les balises devient le texte de lien cliquable :"
                        },
                        "href_attribute": {
                            "title": "Ajouter l'attribut href",
                            "description": "L'attribut href contient votre lien mailto :"
                        },
                        "accessibility": {
                            "title": "HTML amélioré avec accessibilité",
                            "description": "Pour une meilleure accessibilité et expérience utilisateur, ajoutez des attributs descriptifs :"
                        },
                        "live_example": {
                            "title": "Exemple en direct",
                            "description": "Voici comment le lien apparaît aux utilisateurs :"
                        },
                        "demo_link": "Demander une Démo"
                    },
                    "best_practices": {
                        "title": "Meilleures pratiques et conseils",
                        "compatibility": {
                            "title": "Compatibilité multiplateforme",
                            "test_extensively": "Testez extensivement : Vérifiez que les liens fonctionnent sur les principaux clients de messagerie",
                            "keep_simple": "Restez simple : Évitez les combinaisons de paramètres trop complexes",
                            "mobile_first": "Mobile d'abord : Assurez-vous que les liens fonctionnent bien sur les appareils mobiles",
                            "fallback_options": "Options de secours : Fournissez des méthodes de contact alternatives"
                        },
                        "user_experience": {
                            "title": "Directives d'expérience utilisateur",
                            "clear_text": "Texte de lien clair : Utilisez un texte descriptif qui explique l'action",
                            "reasonable_defaults": "Valeurs par défaut raisonnables : Pré-remplissez des informations utiles sans être accablant",
                            "privacy": "Considération de confidentialité : Soyez attentif aux informations que vous pré-remplissez",
                            "professional_tone": "Ton professionnel : Utilisez un langage approprié pour votre audience"
                        },
                        "technical": {
                            "title": "Considérations techniques",
                            "character_limits": "Limites de caractères : Certains clients de messagerie ont des restrictions de longueur d'URL",
                            "encoding_accuracy": "Précision d'encodage : Encodez toujours correctement les caractères spéciaux",
                            "security": "Conscience de sécurité : Évitez d'inclure des informations sensibles dans les URLs",
                            "analytics": "Suivi analytique : Considérez comment suivre l'engagement des liens mailto"
                        }
                    },
                    "final_thoughts": {
                        "title": "Réflexions finales",
                        "description": "Les liens mailto sont un outil puissant pour rationaliser la communication entre les sites web et les utilisateurs. Lorsqu'ils sont implémentés correctement, ils fournissent un pont transparent entre le contenu web et la communication par email.",
                        "key_success": "Rappelez-vous que la clé d'une implémentation mailto réussie réside dans la compréhension des besoins de vos utilisateurs, les tests sur les plateformes, et le maintien de la simplicité tout en fournissant de la valeur.",
                        "conclusion": "Que vous construisiez des formulaires de contact, des systèmes de support ou des campagnes marketing, des liens mailto bien conçus peuvent considérablement améliorer l'engagement des utilisateurs et l'efficacité de la communication."
                    },
                    "additional_resources": {
                        "title": "Ressources supplémentaires :",
                        "rfc_6068": "Spécification RFC 6068",
                        "w3c_html": "Spécification HTML W3C",
                        "compatibility_testing": "Outils de test de compatibilité des clients de messagerie",
                        "encoding_reference": "Guides de référence d'encodage URL"
                    },
                    "toc": {
                        "simple_email": "Créer des liens email simples",
                        "empty_recipient": "Gérer les destinataires vides",
                        "parameter_structure": "Structure et syntaxe des paramètres",
                        "subject_lines": "Ajouter des lignes d'objet",
                        "complete_emails": "Modèles d'email complets",
                        "professional_examples": "Cas d'usage professionnels",
                        "html_implementation": "Implémentation HTML",
                        "final_thoughts": "Réflexions finales"
                    }
                }
            },
            'de': {
                "meta": {
                    "title": "Mailto-Link-Generator - Erstellen Sie professionelle E-Mail-Links sofort",
                    "description": "Generieren Sie professionelle Mailto-Links mit vorausgefülltem Betreff, Text, CC, BCC und mehr. Perfekt für Entwickler, Marketer und Unternehmen. Kostenloses Online-Tool.",
                    "keywords": "mailto link generator, email link ersteller, mailto URL, email marketing, webentwicklung, kontaktformulare"
                },
                "header": {
                    "title": "Mailto-Link-Generator",
                    "subtitle": "Erstellen Sie professionelle E-Mail-Links sofort"
                },
                "form": {
                    "email_label": "An",
                    "email_placeholder": "empfaenger@beispiel.de",
                    "subject_label": "Betreff",
                    "subject_placeholder": "E-Mail-Betreff",
                    "body_label": "Text",
                    "body_placeholder": "E-Mail-Inhalt...",
                    "cc_label": "Cc",
                    "cc_placeholder": "kopie@beispiel.de",
                    "bcc_label": "Bcc",
                    "bcc_placeholder": "blindkopie@beispiel.de",
                    "link_text": "Link-Text",
                    "generate_button": "Meinen Mailto-Link generieren",
                    "copy_button": "Kopieren",
                    "test_button": "Link testen",
                    "validation": {
                        "to_required": "Bitte geben Sie mindestens eine E-Mail-Adresse im \"An\"-Feld ein",
                        "invalid_email": "Bitte geben Sie eine gültige E-Mail-Adresse ein"
                    }
                },
                "results": {
                    "title": "Mailto-Link",
                    "html_code_title": "HTML-Code",
                    "test_title": "Link testen",
                    "copy_button": "Kopieren",
                    "copy_success": "Kopiert!",
                    "copy_error": "Fehler beim Kopieren in die Zwischenablage"
                },
                "donation": {
                    "title": "Unterstützen Sie dieses Projekt",
                    "description": "Wenn dieses Tool hilfreich war, erwägen Sie, seine Entwicklung mit einer kleinen Spende zu unterstützen.",
                    "button_text": "Spendieren Sie mir einen Kaffee ☕",
                    "button": "Spendieren Sie mir einen Kaffee",
                    "support_request": "Wenn dieses Tool für Sie hilfreich war, erwägen Sie, seine Entwicklung mit einer kleinen Kaffee-Spende zu unterstützen. Jeder Beitrag hilft mir, mehr Zeit für die Verbesserung und Wartung solcher Tools zu investieren.",
                    "appreciation": "Ihre Unterstützung bedeutet mir die Welt! ☕✨",
                    "thank_you": "Vielen Dank, dass Sie mein Tool verwenden, und ich hoffe, es bringt Effizienz in Ihre Projekte!",
                    "signature": "—John",
                    "contact": "Fragen oder Feedback? Erreichen Sie mich unter john@chefbusiness.co"
                },
                "footer": {
                    "copyright": "© 2024 MailtoGen Pro. Alle Rechte vorbehalten.",
                    "privacy": "Datenschutzrichtlinie",
                    "terms": "Nutzungsbedingungen",
                    "contact": "Kontakt"
                },
                "guide": {
                    "title": "Vollständiger Mailto-Link-Leitfaden",
                    "intro": {
                        "subtitle": "Meistern Sie die Kunst der Mailto-Links mit unserem umfassenden Leitfaden. Lernen Sie, professionelle E-Mail-Links zu erstellen, die einwandfrei auf allen Plattformen und E-Mail-Clients funktionieren.",
                        "donation_thanks": "An die großzügigen Menschen, die bereits gespendet haben\nVielen Dank! ❤️",
                        "main_message": "Noch wichtiger ist, lassen Sie mich Ihnen über Mailto-Links erzählen, damit Sie wissen, wie Sie sie selbst generieren können.",
                        "description": "Wir werden sowohl die technische Struktur als auch die praktische Implementierung erkunden, um Ihnen bei der Erstellung effektiver E-Mail-Links zu helfen."
                    },
                    "what_are_mailto": {
                        "title": "Mailto-Links verstehen",
                        "description": "Ein Mailto-Link ist ein mächtiger HTML-Hyperlink, der sofort den Standard-E-Mail-Client des Benutzers mit vorausgefüllten Informationen öffnet. Dies eliminiert die Notwendigkeit für Benutzer, E-Mail-Adressen manuell zu kopieren, und macht die Kommunikation nahtlos und professionell."
                    },
                    "basic_syntax": {
                        "title": "Grundlegende Mailto-Syntax",
                        "intro": "Jeder Mailto-Link beginnt mit dem Protokoll-Identifikator:",
                        "simple_example": "Einfache E-Mail-Links erstellen",
                        "description": "Die grundlegendste Form enthält nur die E-Mail-Adresse des Empfängers unmittelbar nach dem Doppelpunkt:",
                        "clickable_description": "Dies erstellt einen anklickbaren Link, der den E-Mail-Client des Benutzers mit dem vorausgefüllten Empfängerfeld öffnet.",
                        "with_subject": "Betreffzeilen hinzufügen",
                        "subject_description": "Betreffzeilen machen Ihre Mailto-Links professioneller und helfen Empfängern, den Zweck der E-Mail sofort zu verstehen.",
                        "subject_example": "Grundlegendes Betreff-Beispiel",
                        "subject_example_description": "Hier ist eine Geschäftsanfrage mit einer klaren Betreffzeile:"
                    },
                    "advanced_features": {
                        "title": "Erweiterte Empfängerverwaltung",
                        "description": "Während einzelne Empfänger am zuverlässigsten sind, können Sie mehrere Empfänger mit spezifischen Techniken einbeziehen. Die Kompatibilität variiert jedoch zwischen E-Mail-Clients, daher sind gründliche Tests unerlässlich.",
                        "multiple_recipients": {
                            "title": "Mehrere Empfänger im AN-Feld",
                            "description": "Für mehrere Hauptempfänger trennen Sie E-Mail-Adressen mit Kommas (ohne Leerzeichen):"
                        },
                        "alternative_separator": {
                            "title": "Alternative Trennzeichen-Methode",
                            "description": "Wenn Kommas bei bestimmten E-Mail-Clients nicht funktionieren, versuchen Sie Semikolons:"
                        },
                        "distributed_recipients": {
                            "title": "Empfohlener Ansatz: Verteilte Empfänger",
                            "description": "Die zuverlässigste Methode verteilt Empfänger auf AN-, CC- und BCC-Felder:"
                        },
                        "pro_tip": "Profi-Tipp: Testen Sie Ihre Mailto-Links immer in verschiedenen E-Mail-Clients (Gmail, Outlook, Apple Mail) vor der Bereitstellung."
                    },
                    "empty_recipients": {
                        "title": "Leere Empfänger handhaben",
                        "description": "Das Erstellen von Mailto-Links ohne vordefinierte Empfänger ermöglicht es Benutzern, ihre eigenen Empfänger zu wählen. Obwohl weniger häufig, hat dieser Ansatz spezifische Anwendungsfälle wie \"Per E-Mail teilen\"-Buttons.",
                        "standard_format": {
                            "title": "Standard-Format für leere Empfänger",
                            "description": "Der kompatibelste Ansatz verwendet ein Fragezeichen direkt nach mailto:"
                        },
                        "alternative_formats": {
                            "title": "Alternative Formate",
                            "description": "Einige E-Mail-Clients akzeptieren diese Variationen:"
                        },
                        "important_note": "Wichtig: Links mit leeren Empfängern haben begrenzte Kompatibilität. Testen Sie gründlich vor der Implementierung."
                    },
                    "parameter_structure": {
                        "title": "Parameterstruktur und Syntax",
                        "description": "Mailto-Links verwenden URL-Parameter-Syntax mit spezifischen Trennzeichen:",
                        "question_mark": "Fragezeichen (?): Trennt die E-Mail-Adresse vom ersten Parameter",
                        "ampersand": "Und-Zeichen (&): Trennt zusätzliche Parameter",
                        "examples_title": "Beispiele für Parameterstruktur"
                    },
                    "encoding_guide": {
                        "title": "URL-Kodierung Grundlagen",
                        "description": "Sonderzeichen in Mailto-Links müssen URL-kodiert werden, um ordnungsgemäße Funktionalität in allen E-Mail-Clients und Browsern zu gewährleisten.",
                        "common_characters": "Häufige Zeichenkodierungen",
                        "common_characters_description": "Hier sind die am häufigsten verwendeten URL-Kodierungen für Mailto-Links:",
                        "why_encoding_matters": {
                            "title": "Warum Kodierung wichtig ist",
                            "description": "Ordnungsgemäße Kodierung stellt sicher, dass Ihre Mailto-Links konsistent funktionieren in:",
                            "browsers": "Verschiedenen Webbrowsern (Chrome, Firefox, Safari, Edge)",
                            "email_clients": "Verschiedenen E-Mail-Clients (Gmail, Outlook, Apple Mail, Thunderbird)",
                            "platforms": "Mobilen und Desktop-Plattformen"
                        },
                        "pro_tip": "💡 Profi-Tipp: Verwenden Sie unseren Mailto-Link-Generator oben, um automatisch alle Kodierungen zu handhaben!"
                    },
                    "encoding": {
                        "characters": {
                            "space": "%20 = Leerzeichen",
                            "exclamation": "%21 = ! (Ausrufezeichen)",
                            "quote": "%22 = \" (Anführungszeichen)",
                            "ampersand": "%26 = & (Und-Zeichen)",
                            "comma": "%2C = , (Komma)",
                            "colon": "%3A = : (Doppelpunkt)",
                            "question": "%3F = ? (Fragezeichen)",
                            "linebreak": "%0A = Zeilenumbruch"
                        }
                    },
                    "complete_templates": {
                        "title": "Vollständige E-Mail-Vorlagen",
                        "description": "Die Kombination von Betreffzeilen und Textinhalt erstellt umfassende E-Mail-Vorlagen, die Zeit für Sie und Ihre Empfänger sparen.",
                        "customer_support": {
                            "title": "Kundensupport-Vorlage",
                            "description": "Perfekt für Helpdesk- oder Support-Seiten:"
                        }
                    },
                    "professional_examples": {
                        "title": "Professionelle Anwendungsfälle",
                        "description": "Hier ist eine umfassende Geschäfts-E-Mail-Vorlage mit allen Parametern:",
                        "project_collaboration": {
                            "title": "Projektzusammenarbeit E-Mail",
                            "to": "An: project.manager@company.com",
                            "cc": "Cc: team.lead@company.com",
                            "bcc": "Bcc: archive@company.com",
                            "subject": "Betreff: Projektvorschlag Einreichung",
                            "body": "Text: Lieber Projektmanager, ich reiche unseren Q4-Projektvorschlag zur Überprüfung ein. Bitte finden Sie die wichtigsten Details unten und lassen Sie mich wissen, wenn Sie zusätzliche Informationen benötigen. Mit freundlichen Grüßen, [Ihr Name]"
                        },
                        "additional_templates": {
                            "title": "Zusätzliche professionelle Vorlagen",
                            "meeting_request": "Besprechungsanfrage:"
                        }
                    },
                    "html_implementation": {
                        "title": "HTML-Implementierung",
                        "description": "Die Umwandlung Ihres Mailto-Links in anklickbares HTML erfordert ordnungsgemäße Anker-Tag-Struktur und Attribute.",
                        "basic_structure": {
                            "title": "Grundlegende HTML-Struktur",
                            "description": "HTML-Anker-Tags bestehen aus öffnenden und schließenden Elementen:"
                        },
                        "link_text": {
                            "title": "Link-Text hinzufügen",
                            "description": "Der Text zwischen den Tags wird zum anklickbaren Link-Text:"
                        },
                        "href_attribute": {
                            "title": "Das href-Attribut hinzufügen",
                            "description": "Das href-Attribut enthält Ihren Mailto-Link:"
                        },
                        "accessibility": {
                            "title": "Verbessertes HTML mit Barrierefreiheit",
                            "description": "Für bessere Barrierefreiheit und Benutzererfahrung fügen Sie beschreibende Attribute hinzu:"
                        },
                        "live_example": {
                            "title": "Live-Beispiel",
                            "description": "So erscheint der Link für Benutzer:"
                        },
                        "demo_link": "Demo anfordern"
                    },
                    "best_practices": {
                        "title": "Best Practices und Tipps",
                        "compatibility": {
                            "title": "Plattformübergreifende Kompatibilität",
                            "test_extensively": "Umfassend testen: Überprüfen Sie, ob Links in wichtigen E-Mail-Clients funktionieren",
                            "keep_simple": "Einfach halten: Vermeiden Sie zu komplexe Parameterkombinationen",
                            "mobile_first": "Mobile-First: Stellen Sie sicher, dass Links auf mobilen Geräten gut funktionieren",
                            "fallback_options": "Fallback-Optionen: Bieten Sie alternative Kontaktmethoden an"
                        },
                        "user_experience": {
                            "title": "Benutzererfahrung-Richtlinien",
                            "clear_text": "Klarer Link-Text: Verwenden Sie beschreibenden Text, der die Aktion erklärt",
                            "reasonable_defaults": "Vernünftige Standards: Füllen Sie hilfreiche Informationen vor, ohne überwältigend zu sein",
                            "privacy": "Datenschutz-Überlegung: Seien Sie achtsam bei den Informationen, die Sie vorab ausfüllen",
                            "professional_tone": "Professioneller Ton: Verwenden Sie angemessene Sprache für Ihr Publikum"
                        },
                        "technical": {
                            "title": "Technische Überlegungen",
                            "character_limits": "Zeichenbegrenzungen: Einige E-Mail-Clients haben URL-Längenbeschränkungen",
                            "encoding_accuracy": "Kodierungsgenauigkeit: Kodieren Sie Sonderzeichen immer ordnungsgemäß",
                            "security": "Sicherheitsbewusstsein: Vermeiden Sie es, sensible Informationen in URLs einzuschließen",
                            "analytics": "Analytics-Tracking: Überlegen Sie, wie Sie Mailto-Link-Engagement verfolgen können"
                        }
                    },
                    "final_thoughts": {
                        "title": "Abschließende Gedanken",
                        "description": "Mailto-Links sind ein mächtiges Werkzeug zur Rationalisierung der Kommunikation zwischen Websites und Benutzern. Wenn sie korrekt implementiert werden, bieten sie eine nahtlose Brücke zwischen Web-Inhalten und E-Mail-Kommunikation.",
                        "key_success": "Denken Sie daran, dass der Schlüssel zu einer erfolgreichen Mailto-Implementierung darin liegt, die Bedürfnisse Ihrer Benutzer zu verstehen, plattformübergreifend zu testen und Einfachheit zu bewahren, während Sie Wert bieten.",
                        "conclusion": "Ob Sie Kontaktformulare, Support-Systeme oder Marketing-Kampagnen erstellen, gut gestaltete Mailto-Links können das Benutzerengagement und die Kommunikationseffizienz erheblich verbessern."
                    },
                    "additional_resources": {
                        "title": "Zusätzliche Ressourcen:",
                        "rfc_6068": "RFC 6068 Spezifikation",
                        "w3c_html": "W3C HTML-Spezifikation",
                        "compatibility_testing": "E-Mail-Client-Kompatibilitäts-Testtools",
                        "encoding_reference": "URL-Kodierung Referenzleitfäden"
                    },
                    "toc": {
                        "simple_email": "Einfache E-Mail-Links erstellen",
                        "empty_recipient": "Leere Empfänger handhaben",
                        "parameter_structure": "Parameterstruktur und Syntax",
                        "subject_lines": "Betreffzeilen hinzufügen",
                        "complete_emails": "Vollständige E-Mail-Vorlagen",
                        "professional_examples": "Professionelle Anwendungsfälle",
                        "html_implementation": "HTML-Implementierung",
                        "final_thoughts": "Abschließende Gedanken"
                    }
                }
            }
        };
    }

    async init() {
        // Detectar idioma del navegador
        const browserLang = navigator.language.split('-')[0];
        const savedLang = localStorage.getItem('mailtoGenLang');
        
        this.currentLanguage = savedLang || (this.supportedLanguages[browserLang] ? browserLang : 'en');
        
        this.createLanguageSelector();
        this.applyTranslations();
    }

    createLanguageSelector() {
        this.updateLanguageButton();
        this.setupLanguageSelectorEvents();
    }

    setupLanguageSelectorEvents() {
        const langButton = document.getElementById('languageBtn');
        const langMenu = document.getElementById('languageMenu');
        const langOptions = document.querySelectorAll('.language-option');

        if (!langButton || !langMenu) return;

        langButton.addEventListener('click', () => {
            langMenu.classList.toggle('show');
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-selector')) {
                langMenu.classList.remove('show');
            }
        });

        // Manejar selección de idioma
        langOptions.forEach(option => {
            option.addEventListener('click', async () => {
                const newLang = option.dataset.lang;
                if (newLang !== this.currentLanguage && this.translations[newLang]) {
                    await this.changeLanguage(newLang);
                }
                langMenu.classList.remove('show');
            });
        });
    }

    async changeLanguage(newLang) {
        this.currentLanguage = newLang;
        localStorage.setItem('mailtoGenLang', newLang);
        
        this.updateLanguageButton();
        this.applyTranslations();
        
        // Actualizar meta tags
        document.documentElement.lang = newLang;
        this.updateMetaTags();
    }

    updateLanguageButton() {
        const currentFlag = document.getElementById('currentFlag');
        const currentLang = document.getElementById('currentLang');
        
        if (currentFlag && currentLang) {
            const lang = this.supportedLanguages[this.currentLanguage];
            
            // Mapeo de banderas SVG para cada idioma
            const flagSvgs = {
                'en': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23012169'/%3E%3Cpath d='M0 0l60 30M60 0L0 30' stroke='%23fff' stroke-width='6'/%3E%3Cpath d='M0 0l60 30M60 0L0 30' stroke='%23C8102E' stroke-width='4'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23fff' stroke-width='10'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23C8102E' stroke-width='6'/%3E%3C/svg%3E",
                'es': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23AA151B'/%3E%3Crect width='60' height='10' y='10' fill='%23F1BF00'/%3E%3C/svg%3E",
                'zh': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23DE2910'/%3E%3Cpolygon fill='%23FFDE00' points='12,6 14.5,12.5 21,12.5 16,16.5 18.5,23 12,19 5.5,23 8,16.5 3,12.5 9.5,12.5'/%3E%3C/svg%3E",
                'fr': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='20' height='30' fill='%23002395'/%3E%3Crect x='20' width='20' height='30' fill='%23FFFFFF'/%3E%3Crect x='40' width='20' height='30' fill='%23ED2939'/%3E%3C/svg%3E",
                'de': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='10' fill='%23000000'/%3E%3Crect y='10' width='60' height='10' fill='%23DD0000'/%3E%3Crect y='20' width='60' height='10' fill='%23FFCE00'/%3E%3C/svg%3E",
                'ja': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23FFFFFF'/%3E%3Ccircle cx='30' cy='15' r='9' fill='%23BC002D'/%3E%3C/svg%3E",
                'ko': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23FFFFFF'/%3E%3Ccircle cx='30' cy='15' r='8' fill='%23CD2E3A'/%3E%3C/svg%3E",
                'pt': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='24' height='30' fill='%23046A38'/%3E%3Crect x='24' width='36' height='30' fill='%23DA020E'/%3E%3C/svg%3E"
            };
            
            // Usar la bandera específica o la de inglés por defecto
            const flagSrc = flagSvgs[this.currentLanguage] || flagSvgs['en'];
            currentFlag.src = flagSrc;
            currentFlag.alt = lang ? lang.name : 'Language';
            currentLang.textContent = this.currentLanguage.toUpperCase();
        }
    }

    applyTranslations() {
        const currentTranslations = this.translations[this.currentLanguage] || this.translations['en'];
        
        // Traducir elementos con data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            const translation = this.getTranslation(key, currentTranslations);
            if (translation) {
                if (element.tagName === 'INPUT' && element.type !== 'submit') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Traducir placeholders específicos
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.dataset.translatePlaceholder;
            const translation = this.getTranslation(key, currentTranslations);
            if (translation) {
                element.placeholder = translation;
            }
        });

        // Traducir títulos y meta descriptions
        this.updateMetaTags();
    }

    updateMetaTags() {
        const currentTranslations = this.translations[this.currentLanguage] || this.translations['en'];
        const titleElement = document.querySelector('title');
        const descriptionElement = document.querySelector('meta[name="description"]');
        const keywordsElement = document.querySelector('meta[name="keywords"]');

        if (titleElement && currentTranslations.meta?.title) {
            titleElement.textContent = currentTranslations.meta.title;
        }

        if (descriptionElement && currentTranslations.meta?.description) {
            descriptionElement.content = currentTranslations.meta.description;
        }

        if (keywordsElement && currentTranslations.meta?.keywords) {
            keywordsElement.content = currentTranslations.meta.keywords;
        }
    }

    getTranslation(key, translations = null) {
        const trans = translations || this.translations[this.currentLanguage] || this.translations['en'];
        const keys = key.split('.');
        let translation = trans;
        
        for (const k of keys) {
            if (translation && typeof translation === 'object' && k in translation) {
                translation = translation[k];
            } else {
                return null;
            }
        }
        
        return translation;
    }

    // Método para obtener traducciones desde JavaScript
    t(key) {
        return this.getTranslation(key) || key;
    }
}

// Instancia global del gestor de traducciones
let translationManager;

// Exportar para uso en otros scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TranslationManager;
}
